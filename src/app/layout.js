import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { FaUser, FaShoppingCart, FaCcVisa, FaCcMastercard, FaCcPaypal, FaApple } from "react-icons/fa";
import Link from 'next/link'; // Import the Next.js Link component
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <Image
              src="/images/logo.jpg"
              alt="Weathered Logo"
              width={100}
              height={30}
            />

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 text-gray-800">
              <Link href="/" className="hover:text-gray-600 transition duration-300 text-lg font-medium">
                Home
              </Link>
              <a href="#" className="hover:text-gray-600 transition duration-300 text-lg font-medium">
                Shop
              </a>
              <a href="#" className="hover:text-gray-600 transition duration-300 text-lg font-medium">
                New Merch
              </a>
              <a href="#" className="hover:text-gray-600 transition duration-300 text-lg font-medium">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Toggle Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            {/* Search, Login, Cart */}
            <div className="flex space-x-6 items-center">
              {/* Search */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <i className="fas fa-search absolute top-2 right-2 text-gray-600"></i>
              </div>

              {/* Login Icon */}
              <Link href="/Account/Login" className="text-gray-600 hover:text-gray-600 transition duration-300">
                <FaUser />
              </Link>

              {/* Cart Icon */}
              <a href="#" className="text-gray-600 hover:text-gray-600 transition duration-300">
                <FaShoppingCart />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden bg-white shadow-lg space-y-4 py-4 px-6">
            <a href="#" className="text-gray-800 text-lg font-medium p-4 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 text-lg font-medium p-4 hover:text-gray-600">
              Shop
            </a>
            <a href="#" className="text-gray-800 text-lg font-medium p-4 hover:text-gray-600">
              New Merch
            </a>
            <a href="#" className="text-gray-800 text-lg font-medium p-4 hover:text-gray-600">
              Contact
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Search</a></li>
                <li><a href="#" className="hover:text-white">Return Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Exclusive Offers</h4>
              <p className="text-sm text-gray-400 mb-4">Get exclusive offers direct when you sign up</p>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 mb-4 rounded-md w-full text-black"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded-md w-full"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Social Media and Country Selector */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/images/logo.jpg" alt="Instagram" className="h-6 w-6" />
                </a>
              </div>
              <div className="mb-4">
                <select className="bg-gray-700 text-white p-2 rounded-md">
                  <option value="VN">Vietnam (VND)</option>
                  <option value="US">United States (USD)</option>
                </select>
              </div>
              <div className="text-sm text-gray-400">
                <p>&copy; 2024 Mills Vintage USA</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-center space-x-8">
              <FaCcVisa className="h-8 text-blue-600" />
              <FaCcMastercard className="h-8 text-red-600" />
              <FaCcPaypal className="h-8 text-blue-500" />
              <FaApple className="h-8 text-black" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
