import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const {
        logo,
        name,
        description,
        location,
        emailFormat,
        contact,
        website,
        phone,
      } = req.body;

      const db = await connectToDatabase(); // Ensure to await the connection
      if (!db) {
        throw new Error("Database connection failed");
      }

      const universitiesCollection = db.collection("universities"); // Access collection after ensuring db is not null

      const result = await universitiesCollection.insertOne({
        logo,
        name,
        description,
        location,
        emailFormat,
        contact,
        website,
        phone,
      });

      res.status(201).json({
        message: "University community created successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error creating university community:", error);
      res.status(500).json({ error: "Failed to create university community" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
