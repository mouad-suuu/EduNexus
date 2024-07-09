const uploadFile = require("./2googleDrive"); // Correct import statement

const filePath = "files/testfile.txt"; // Replace with your file path
const fileName = "testfile.txt"; // Replace with your desired file name

uploadFile(filePath, fileName)
  .then((result) => {
    console.log("Upload success:", result);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  });
