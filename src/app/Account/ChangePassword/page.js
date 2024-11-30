'use client'; // Chỉ thị rằng đây là client component

import React, { useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState(""); // Mật khẩu hiện tại
  const [newPassword, setNewPassword] = useState(""); // Mật khẩu mới
  const [confirmPassword, setConfirmPassword] = useState(""); // Xác nhận mật khẩu mới
  const [message, setMessage] = useState(""); // Thông báo kết quả (thành công hoặc lỗi)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu mới và mật khẩu xác nhận có khớp không
    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    // Giả sử đây là nơi bạn sẽ gọi API để thay đổi mật khẩu
    // Nếu mật khẩu hiện tại không đúng, thông báo lỗi
    if (currentPassword !== "correctPassword") {
      setMessage("Mật khẩu hiện tại không đúng.");
      return;
    }

    setMessage("Mật khẩu đã được thay đổi thành công!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Change Password
        </h2>

        {/* Form Đổi Mật Khẩu */}
        <form onSubmit={handleSubmit}>
          {/* Mật khẩu hiện tại */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Enter current password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)} // Cập nhật mật khẩu hiện tại
            />
          </div>

          {/* Mật khẩu mới */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Enter new password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Cập nhật mật khẩu mới
            />
          </div>

          {/* Xác nhận mật khẩu mới */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Confirm new password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật mật khẩu xác nhận
            />
          </div>

          {/* Thông báo kết quả */}
          {message && (
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>{message}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
