require("dotenv").config(); // Load environment variables from .env file
const fs = require("fs");
const { google } = require("googleapis");

// Initialize OAuth2 client with environment variables
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
});

async function uploadFile(filePath, fileName) {
  const drive = google.drive({ version: "v3", auth: oAuth2Client });

  // Determine MIME type based on file extension
  let mimeType = "";
  const fileExt = fileName.split(".").pop().toLowerCase();
  switch (fileExt) {
    case "pdf":
      mimeType = "application/pdf";
      break;
    case "jpg":
    case "jpeg":
      mimeType = "image/jpeg";
      break;
    case "png":
      mimeType = "image/png";
      break;
    default:
      mimeType = "application/octet-stream"; // Default to binary if MIME type is unknown
  }

  const fileMetadata = {
    name: fileName,
  };

  const media = {
    mimeType: mimeType,
    body: fs.createReadStream(filePath),
  };

  try {
    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink, webContentLink",
    });
    await drive.permissions.create({
      fileId: file.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    console.log("File Id:", file.data.id);
    console.log("Web View Link:", file.data.webViewLink);
    console.log("Web Content Link:", file.data.webContentLink);
    return {
      fileId: file.data.id,
      webViewLink: file.data.webViewLink,
      webContentLink: file.data.webContentLink,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file to Google Drive");
  }
}
module.exports = { uploadFile };
