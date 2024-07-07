import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import University from "@/models/University";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const {
        name,
        description,
        location,
        website,
        academicEmailFormat,
        logo,
      } = req.body;
      const newUniversity = new University({
        name,
        description,
        location,
        website,
        academicEmailFormat,
        logo,
      });
      const savedUniversity = await newUniversity.save();
      res.status(201).json(savedUniversity);
    } catch (error) {
      res.status(400).json({ error: "Error creating university" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
