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

async function uploadFile() {
  const drive = google.drive({ version: "v3", auth: oAuth2Client });
  const fileMetadata = {
    name: "testfile.txt",
  };
  const media = {
    mimeType: "text/plain",
    body: fs.createReadStream("files/testfile.txt"),
  };

  try {
    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink, webContentLink",
    });
    console.log("File Id:", file.data.id);
    console.log("Web View Link:", file.data.webViewLink);
    console.log("Web Content Link:", file.data.webContentLink);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

uploadFile();
