"use server";

import { Storage } from "@google-cloud/storage";
import { google } from "googleapis";

// Initialize Google Drive API
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
});

const drive = google.drive({ version: "v3", auth: oauth2Client });

// Function to upload a file to Google Drive
export const uploadFileToDrive = async (file: File) => {
  const { name, type, buffer } = file;

  const response = await drive.files.create({
    requestBody: {
      name: name,
      mimeType: type,
    },
    media: {
      mimeType: type,
      body: buffer,
    },
  });

  return response.data;
};

export const UploadFile = async (form: FormData) => {
  "use server";

  try {
    const file = form.get("file") as File;
    await UploadToGcs(file); // Assuming UploadToGcs is already implemented
    await uploadFileToDrive(file);
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const GetSignedUrl = async (fileName: string) => {
  "use server";

  const storage = new Storage({ keyFilename: "storage-demo-key.json" });

  const [url] = await storage
    .bucket("scriptbytes-storagedemo")
    .file(fileName)
    .getSignedUrl({
      action: "write",
      version: "v4",
      expires: Date.now() + 15 * 60 * 1000,
      contentType: "application/octet-stream",
    });

  return url;
};

export const SetCors = async () => {
  "use server";

  const storage = new Storage({ keyFilename: "storage-demo-key.json" });
  await storage.bucket("scriptbytes-storagedemo").setCorsConfiguration([
    {
      maxAgeSeconds: 3600,
      method: ["GET", "PUT"],
      origin: ["*"],
      responseHeader: ["Content-Type"],
    },
  ]);
};
