'use client'; // Chỉ thị rằng đây là client component

import Image from "next/image";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaApple } from 'react-icons/fa';
import { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa'; // Dùng biểu tượng chat từ react-icons

export default function Home() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState(''); // Trạng thái tin nhắn
  const [messages, setMessages] = useState([]); // Mảng tin nhắn

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Thêm tin nhắn vào mảng
      setMessage(''); // Xóa tin nhắn sau khi gửi
    }
  };
  return (
    <>

<div>
      {/* Bong bóng chat */}
      <div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-blue-500 rounded-full p-4 cursor-pointer shadow-lg z-50"
      >
        <FaCommentDots size={30} color="#fff" />
      </div>

      {/* Cửa sổ chat */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-8 w-80 h-[400px] bg-white shadow-lg rounded-lg flex flex-col z-40">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span>Customer Support</span>
            <button
              onClick={toggleChat}
              className="text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto text-black text-sm">
            {messages.length === 0 ? (
              <p>Hi there! How can we assist you today?</p>
            ) : (
              messages.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-500 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Cập nhật trạng thái tin nhắn
              placeholder="Type a message..."
              className="w-4/5 p-2 border border-gray-700 text-black rounded-md mr-2"
            />
            <button
              onClick={handleSendMessage}
              className="w-1/5 p-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
 
      {/* Banner */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.electricland-tokyo.com/cdn/shop/files/2021-03-03-17-46-18.jpg?v=1617811192')",
          height: "550px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-500 hover:bg-opacity-50">
          <div className="text-center text-white opacity-90 hover:opacity-100 transition duration-500">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              WEATHERED
            </h1>
            <a
              href="#"
              className="px-10 py-4 text-2xl text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              Shop all
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
      New Arrivals
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {/* Product Card */}
      {[{
          src: "https://www.glab.vn/storage/products/2024/11/28/480x320/674868a138a2f.jpg",
          title: "Vintage 1999 Star Wars Tee",
          price: "3,200,000 VND",
          discountPrice: "2,800,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2024/11/28/480x320/674867d624948.jpg",
          title: "Vintage 90s Nike Barkley Tee",
          price: "2,500,000 VND",
          discountPrice: "2,200,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8e735b1f.jpg",
          title: "Vintage Nike PSG 1997/98 Jersey",
          price: "4,100,000 VND",
          discountPrice: "3,800,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2024/11/18/480x320/673ae899d6ed0.jpg",
          title: "Vintage Nike x Stussy Tee",
          price: "5,200,000 VND",
          discountPrice: "4,700,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2020/10/22/480x320/5f916f8113fdb.jpg",
          title: "Air Jordan 1 Low Light Smoke Grey",
          price: "5,500,000 VND",
          discountPrice: "4,800,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2022/02/16/480x320/620cf374889bc.jpg",
          title: "Nike WMNS Dunk Low Disrupt 2 Malachite",
          price: "4,500,000 VND",
          discountPrice: "3,200,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2024/06/21/480x320/6674fd61b986f.jpg",
          title: "New Balance 1906R Charlotte Hornets",
          price: "2,500,000 VND",
          discountPrice: "3,800,000 VND",
        },
        {
          src: "https://www.glab.vn/storage/products/2022/07/23/480x320/62dbd03dd29cd.jpg",
          title: "Nike Air Force 1 Low Shadow White Atmosphere Mint Foam (W)",
          price: "3,000,000 VND",
          discountPrice: "2,970,000 VND",
        }
      ].map((product, index) => {
        const originalPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
        const discountPrice = parseInt(product.discountPrice.replace(/[^0-9]/g, ''));
        const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 relative group"
          >
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-lg">
              {discountPercentage}% OFF
            </div>
            <img
              src={product.src}
              alt={product.title}
              className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-gray-800 font-semibold text-lg mb-2 hover:text-indigo-600 transition duration-200">
                {product.title}
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <p className="text-gray-600 text-sm line-through">{product.price}</p>
                <p className="text-red-600 text-sm font-bold">{product.discountPrice}</p>
              </div>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-indigo-700 hover:shadow-2xl transition duration-300">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
    <div className="text-center mt-12">
      <a
        href="#"
        className="px-10 py-4 bg-gray-600 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl hover:bg-indigo-700 transition duration-300"
      >
        View All Products
      </a>
    </div>
  </div>
</section>


<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    <div className="bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Payment & Shipping Information
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Payment Methods */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
          <div className="flex space-x-8 justify-center">
            {/* Visa Icon */}
            <div className="flex items-center space-x-2">
              <FaCcVisa className="h-12 w-12 text-gray-800" />
            </div>

            {/* Mastercard Icon */}
            <div className="flex items-center space-x-2">
              <FaCcMastercard className="h-12 w-12 text-gray-800" />
            </div>

            {/* PayPal Icon */}
            <div className="flex items-center space-x-2">
              <FaCcPaypal className="h-12 w-12 text-gray-800" />
            </div>

            {/* Apple Pay Icon */}
            <div className="flex items-center space-x-2">
              <FaApple className="h-12 w-12 text-gray-800" />
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="flex-1 px-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li>Free shipping on orders over $100</li>
            <li>Standard shipping takes 5-7 business days</li>
            <li>Express shipping available for an additional fee</li>
            <li>International shipping is available in select countries</li>
          </ul>
        </div>

        {/* Returns & Exchanges */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Returns & Exchanges</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li>Returns are accepted within 30 days of purchase</li>
            <li>Items must be unused and in original packaging</li>
            <li>Return shipping is free for domestic orders</li>
            <li>Exchanges are available for items of equal or lesser value</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Fashion News Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
      Fashion News
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* News Article */}
      {[
        { title: "Autumn Style 2024", image: "https://bazaarvietnam.vn/wp-content/uploads/2024/08/xu-huong-thoi-trang-thu-dong-2024-00-thumb-dior.jpg", description: "Explore the latest trends for autumn! From layered outfits to standout accessories." },
        { title: "Vintage Tees Trend", image: "https://bazaarvietnam.vn/wp-content/uploads/2024/08/xu-huong-thoi-trang-thu-dong-2024-bare-chest-02.jpg", description: "Why vintage tees are still a favorite among fashion lovers." },
        { title: "Fashion Accessories 2024", image: "https://bazaarvietnam.vn/wp-content/uploads/2024/08/xu-huong-thoi-trang-thu-dong-2024-grunge-layers.jpg", description: "Discover the hottest accessories to elevate your style in 2024." },
      ].map((news, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-105">
          <img src={news.image} alt={news.title} className="w-full h-72 md:h-80 object-cover" />
          <div className="p-6 bg-white">
            <h3 className="text-gray-800 font-semibold text-xl mb-2">{news.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{news.description}</p>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-300">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
            <a
              href="#"
              className="px-10 py-4 bg-gray-600 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl hover:bg-indigo-700 transition duration-300"
            >
              Xem tất cả tin tức
            </a>
          </div>
  </div>
</section>


    </>
  );
} 