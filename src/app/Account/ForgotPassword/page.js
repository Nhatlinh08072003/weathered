'use client'; // Chỉ thị rằng đây là client component

import React, { useState } from "react";
import Link from 'next/link'; // Import the Next.js Link component

export default function ForgotPassword() {
  const [email, setEmail] = useState(""); // State để quản lý email nhập vào
  const [message, setMessage] = useState(""); // State để hiển thị thông báo thành công hoặc lỗi

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả sử bạn sẽ gọi API để gửi liên kết đặt lại mật khẩu. Đây là ví dụ về cách xử lý.
    if (email) {
      setMessage("A reset link has been sent to your email address.");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        {/* Form Quên Mật Khẩu */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="example@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Cập nhật email khi người dùng nhập
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Thông Báo Thành Công hoặc Lỗi */}
        {message && (
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>{message}</p>
          </div>
        )}

        {/* Link Quay Lại Đăng Nhập */}
        <div className="mt-6 text-center">
          <Link href="/Account/Login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
