const { google } = require("googleapis");
const { OAuth2Client } = require("google-auth-library");

const oauth2Client = new OAuth2Client({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "YOUR_REDIRECT_URI",
});

async function uploadFile(req, res) {
  const { token } = req.body; // Assuming you're passing the token in the request body

  oauth2Client.setCredentials({
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    expiry_date: token.expiry_date, // Ensure this is stored and used correctly
  });

  const drive = google.drive({ version: "v3", auth: oauth2Client });

  try {
    // Perform the file upload operation
    const response = await drive.files.create({
      requestBody: {
        name: "File Name",
        mimeType: "image/png", // Example MIME type
      },
      media: {
        mimeType: "image/png",
        body: req.file.buffer, // Assuming you have the file buffer available
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file: " + error.message);
  }
}
