import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import University from "@/models/University";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { universityId, fieldId } = req.query;

  if (req.method === "POST") {
    try {
      const { name, description } = req.body;
      const university = await University.findById(universityId);
      if (!university) {
        return res.status(404).json({ error: "University not found" });
      }

      const field = university.fields.id(fieldId);
      if (!field) {
        return res.status(404).json({ error: "Field not found" });
      }

      field.courses.push({ name, description });
      const updatedUniversity = await university.save();
      res.status(201).json(updatedUniversity);
    } catch (error) {
      res.status(400).json({ error: "Error adding course" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
