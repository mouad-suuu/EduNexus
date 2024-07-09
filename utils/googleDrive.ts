// import { google } from "googleapis";
// import fs from "fs";
// import path from "path";

// // Initialize Google Drive API
// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );

// oauth2Client.setCredentials({
//   access_token: process.env.ACCESS_TOKEN,
//   refresh_token: process.env.REFRESH_TOKEN,
// });

// const drive = google.drive({ version: "v3", auth: oauth2Client });

// export const uploadFileToDrive = async (
//   filePath: string
// ): Promise<string | undefined> => {
//   const mimeType = "application/octet-stream"; // Adjust as needed
//   const fileName = path.basename(filePath);

//   const response = await drive.files.create({
//     requestBody: {
//       name: fileName,
//       mimeType: mimeType,
//     },
//     media: {
//       mimeType: mimeType,
//       body: fs.createReadStream(filePath),
//     },
//   });

//   if (!response.data || !response.data.id) {
//     throw new Error("Failed to upload file to Google Drive");
//   }

//   const fileId = response.data.id;

//   await drive.permissions.create({
//     fileId: fileId,
//     requestBody: {
//       role: "reader",
//       type: "anyone",
//     },
//   });

//   const result = await drive.files.get({
//     fileId: fileId,
//     fields: "webViewLink, webContentLink",
//   });

//   if (!result.data || !result.data.webViewLink) {
//     throw new Error("Failed to retrieve file URL from Google Drive");
//   }

//   return result.data.webViewLink;
// };
