"use client";

import { GetSignedUrl } from "@/actions/actions";
import React from "react";

function UploadSignedUrl() {
  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("file") as File;
    const url = await GetSignedUrl(file.name);
    console.log(url);

    const response = await fetch(url as string, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });

    console.log(response.ok);
  };

  return (
    <>
      <h1 className="text-gray-600 text-xl m-8">Upload Using Signed URL</h1>
      <form onSubmit={HandleSubmit}>
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

export default UploadSignedUrl;
