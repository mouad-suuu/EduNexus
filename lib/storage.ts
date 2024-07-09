import { google, drive_v3 } from "googleapis";
import { PassThrough } from "stream";

export const UploadToGoogleDrive = async (file: File, auth: any) => {
  if (!file) throw new Error("No file provided");
  if (file.size < 1) throw new Error("File is empty");

  const drive = google.drive({ version: "v3", auth });
  const buffer = Buffer.from(await file.arrayBuffer());

  const fileMetadata = {
    name: file.name,
  };
  const media = {
    mimeType: file.type,
    body: new PassThrough().end(buffer),
  };

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });

    if (response.data && response.data.id) {
      console.log("File ID:", response.data.id);
      return true;
    } else {
      throw new Error("File upload failed");
    }
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    throw error;
  }
};
