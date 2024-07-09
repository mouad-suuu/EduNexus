import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "@/googleDrive"; // Adjust the path accordingly
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = body.file as File; // Cast body.file to File type

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true }); // Create directory if it doesn't exist
    }

    const filePath = path.resolve(UPLOAD_DIR, file.name);
    fs.writeFileSync(filePath, buffer);

    const result = await uploadFile(filePath, file.name); // Call uploadFile function with filePath and fileName

    // Optionally, you can remove the file from local storage after uploading to Google Drive
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return NextResponse.json({
      success: true,
      name: file.name,
      fileId: result.fileId,
      webViewLink: result.webViewLink,
      webContentLink: result.webContentLink,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to upload file to Google Drive",
    });
  }
};
