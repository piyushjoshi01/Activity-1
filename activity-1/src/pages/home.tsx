import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/photo-1618083707368-b3823daa2726.avif')",
        }}
      >
        <div className="container mx-auto p-4 flex flex-wrap justify-center bg-black bg-opacity-50 rounded-lg">
          {/* Dummy Vacation Post 1 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white bg-opacity-90 m-4 p-4">
            <img
              className="w-full h-32 object-cover"
              src="https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/amazing-panorama-beach-landscape-maldives-sunset-seascape-view-horizon-with-sea-and-sky-tranquil-scenery-tourism-and-travel-banner-summer-luxury-resort-landscape-vacation-holiday-island-concept-photo.jpg"
              alt="Vacation Image 1"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Beachside Fun</div>
              <p className="text-gray-700 text-base">
                Had an amazing time at the shores of Bali. The sunset views were
                breathtaking and the local cuisine was delightful!
              </p>
              <p className="text-sm text-gray-500">Location: Bali, Indonesia</p>
            </div>
          </div>

          {/* Dummy Vacation Post 2 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white bg-opacity-90 m-4 p-4">
            <img
              className="w-full h-32 object-cover"
              src="https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/pexels-stywo-1054218.jpg"
              alt="Vacation Image 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mountain Adventure</div>
              <p className="text-gray-700 text-base">
                Climbed the snowy peaks of the Alps. Thrilling and chilling
                experience!
              </p>
              <p className="text-sm text-gray-500">Location: Swiss Alps</p>
            </div>
          </div>

          {/* Dummy Vacation Post 3 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white bg-opacity-90 m-4 p-4">
            <img
              className="w-full h-32 object-cover"
              src="https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/360_F_347573743_58bQNnPkhAFxXwNKhtIBndZ9I68Z2l7y.jpg"
              alt="Vacation Image 3"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Desert Exploration</div>
              <p className="text-gray-700 text-base">
                Explored the vast dunes of the Sahara Desert. A truly serene and
                expansive view!
              </p>
              <p className="text-sm text-gray-500">Location: Sahara Desert</p>
            </div>
          </div>

          {/* Dummy Vacation Post 4 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white bg-opacity-90 m-4 p-4">
            <img
              className="w-full h-32 object-cover"
              src="https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/glass-skyscrapers-reflect-city-life-at-dusk-free-photo.jpg"
              alt="Vacation Image 4"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">City Life</div>
              <p className="text-gray-700 text-base">
                Enjoyed the bustling nightlife and historic sites of Rome. A
                city full of life and history!
              </p>
              <p className="text-sm text-gray-500">Location: Rome, Italy</p>
            </div>
          </div>

          {/* Upload Image Button and Users Button */}
          <div className="flex justify-center w-full mt-8 space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/upload-image")}
            >
              Share Your Adventure
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/users")}
            >
              HODOPHILES
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
