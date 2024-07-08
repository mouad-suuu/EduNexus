import formidable from "formidable";
import uploadFile from "@/actions/uploadUtil";

export async function POST(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Error parsing form data" });
      return;
    }

    const filePath = files.file.path;
    const fileName = files.file.name;

    try {
      const webViewLink = await uploadFile(filePath, fileName);
      res.status(200).json({ data: webViewLink });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "Failed to upload file to Google Drive" });
    }
  });
}

export default POST;
