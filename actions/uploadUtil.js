// \utils\uploadUtil.js
const fs = require("fs");
const { google } = require("googleapis");
const { drive } = require("../lib/cloud");
export default async function uploadFile(filePath, fileName) {
  const fileMetadata = {
    name: fileName,
  };

  const media = {
    mimeType: "application/pdf",
    body: fs.createReadStream(filePath),
  };

  try {
    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink",
    });

    console.log("File Id:", response.data.id);
    console.log("File WebViewLink:", response.data.webViewLink);

    return response.data.webViewLink; // Return the file's webViewLink
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file to Google Drive");
  }
}

export const config = {
  api: {
    bodyParser: false, // Disabling the built-in bodyParser to handle it manually
  },
};
