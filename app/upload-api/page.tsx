import React from "react";

function UploadWithApi() {
  return (
    <>
      <h1 className="text-gray-600 text-xl m-8">Upload Using API</h1>
      <form action="/api/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" />
        <button
          type="submit"
          className="border border-slate-200 shadow-md hover:bg-slate-100 px-4 py-2 rounded-md"
        >
          Upload
        </button>
      </form>
    </>
  );
}

export default UploadWithApi;
