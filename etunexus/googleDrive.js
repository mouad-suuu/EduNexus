const fs = require("fs");
const { google } = require("googleapis");

// Replace these values with the ones obtained from OAuth 2.0 Playground
const ACCESS_TOKEN =
  "ya29.a0AXooCgsfGWEokBIV_kLYolzzWd-al63BTzWmhFauOiDgoTfPVsXd2kfngDmU8hvY6bP0xt3dFdVvLjS6ki2fw8z79QsmQzQ7uItwF4OYqLtWqRNnKwJASIl_ncNsFGIgqSHgroQ2Du6J3ZLg2Nj2qwFKjjOpiG0WhNOuaCgYKARcSARMSFQHGX2MiarcZvO1MgEtA72-YuA-ikg0171";
const REFRESH_TOKEN =
  "1//045F4AkCuFflGCgYIARAAGAQSNwF-L9IrGU8AGl55jy1J9AOfwg_jVDQKu0DfitcPF9jDQHwwrSXJERWad38fen8BTNXka02xGHE";
const CLIENT_ID =
  "1073587914917-t3btkji70gvkktnb6l5m59f54rd98p25.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

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
      fields: "id",
    });
    console.log("File Id:", file.data.id);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

uploadFile();
