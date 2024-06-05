import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);
    try {
      await axios.post(
        "https://f80m7rijt5.execute-api.us-east-1.amazonaws.com/dev/users/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("Upload successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/photo-1618083707368-b3823daa2726.avif')",
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-xs bg-white bg-opacity-75 p-5 rounded">
          <h1 className="text-xl mb-4">Upload Your Vacation Image</h1>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="mb-4"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mb-4 max-w-full h-auto rounded"
            />
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full"
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
          {uploadStatus && <p className="text-red-500 mt-2">{uploadStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
