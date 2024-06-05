import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserResponse {
  phone_number: { S: string };
  password: { S: string };
  birthdate: { S: string };
  email: { S: string };
  name?: { S: string };
}

interface User {
  phoneNumber: string;
  password: string;
  birthdate: string;
  email: string;
  name?: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get<UserResponse[]>(
          "https://f80m7rijt5.execute-api.us-east-1.amazonaws.com/dev/users/getUsers"
        );

        const transformedData: User[] = response.data.map((user) => ({
          phoneNumber: user.phone_number.S,
          password: user.password.S,
          birthdate: user.birthdate.S,
          email: user.email.S,
          name: user.name?.S,
        }));

        setUsers(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://joshi-bucket-1.s3.amazonaws.com/uploaded_images/photo-1618083707368-b3823daa2726.avif')",
      }}
    >
      <div className="container mx-auto px-4 py-8 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Registered Users
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.email}
              className="max-w-xs rounded overflow-hidden shadow-lg bg-white bg-opacity-90 p-4"
            >
              <img
                className="w-full h-32 object-cover"
                src={`https://via.placeholder.com/150?text=${
                  user.name ?? "User"
                }`}
                alt={user.name ?? "User"}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {user.name ?? "Unnamed User"}
                </div>
                <p className="text-gray-700 text-base">Email: {user.email}</p>
                <p className="text-gray-700 text-base">
                  Phone: {user.phoneNumber}
                </p>
                <p className="text-gray-700 text-base">
                  Birthdate: {user.birthdate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
