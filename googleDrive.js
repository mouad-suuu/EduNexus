const fs = require("fs");
const { google } = require("googleapis");

// Replace these values with the ones obtained from OAuth 2.0 Playground
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Create an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({
  access_token: ACCESS_TOKEN,
  refresh_token: REFRESH_TOKEN,
});

async function uploadFile() {
  const drive = google.drive({ version: "v3", auth: oAuth2Client });
  const fileMetadata = {
    name: "test.png",
  };
  const media = {
    mimeType: "image/png",
    body: fs.createReadStream("public/uploads/test.png"),
  };

  try {
    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });
    console.log("File Id:", file.data.id);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

uploadFile();
