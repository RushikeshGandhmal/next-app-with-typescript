"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={280} height={170} alt="A coffe image" />
      )}
      <CldUploadWidget
        uploadPreset="qru2zl9t"
        onUpload={(result, widget) => {
          console.log(result);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary mt-4" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
