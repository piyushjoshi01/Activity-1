import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/photo-1503220317375-aaad61436b1b.avif')",
        backgroundSize: "cover", // Ensure the image covers the screen well
        backgroundPosition: "center", // Center the image
        backgroundColor: "#000", // Fallback color
      }}
    >
      <h1 className="text-6xl text-white mb-4">Welcome to Vacation Share!</h1>
      <p className="text-xl text-white mb-12">
        Share your travel experiences with a community that cares.
      </p>
      <div className="absolute top-4 right-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => navigate("/register")}
        >
          Signup
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
