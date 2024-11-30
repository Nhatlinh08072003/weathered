'use client'; // Chỉ thị rằng đây là client component

import { useState } from "react";

export default function Profile() {
  // Giả sử bạn đã có thông tin người dùng trong state
  const [user, setUser] = useState({
    fullName: "Nguyen Thi Mai",
    phone: "0123456789",
    email: "mainguyen@example.com",
    address: "Hà Nội, Việt Nam",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-white"> {/* Đổi gradient sang màu trắng */}
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Profile</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <p className="text-lg font-medium text-gray-800">{user.fullName}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <p className="text-lg font-medium text-gray-800">{user.phone}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="text-lg font-medium text-gray-800">{user.email}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <p className="text-lg font-medium text-gray-800">{user.address}</p>
        </div>

        <div className="mt-8 text-center">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
