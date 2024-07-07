import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import University from "@/models/University";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { universityId, fieldId, courseId } = req.query;

  if (req.method === "POST") {
    try {
      const { title } = req.body;
      const university = await University.findById(universityId);
      if (!university) {
        return res.status(404).json({ error: "University not found" });
      }

      const field = university.fields.id(fieldId);
      if (!field) {
        return res.status(404).json({ error: "Field not found" });
      }

      const course = field.courses.id(courseId);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      course.chapters.push({ title });
      const updatedUniversity = await university.save();
      res.status(201).json(updatedUniversity);
    } catch (error) {
      res.status(400).json({ error: "Error adding chapter" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
