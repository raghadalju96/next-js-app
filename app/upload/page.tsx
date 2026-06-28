"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicID, setPublicID] = useState("");
  return (
    <>
      {publicID && (
        <CldImage src={publicID} alt={""} width={200} height={200} />
      )}
      <CldUploadWidget
        uploadPreset="upload1"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const res = result.info as CloudinaryResult;
          setPublicID(res.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
