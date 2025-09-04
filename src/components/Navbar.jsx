import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src="/icons/blogtown.png" // 👉 replace with your logo path (e.g. /assets/logo.png or an online URL)
                alt="BlogTown Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="ml-2 text-2xl font-bold text-blue-600">BlogTown</span>
            </Link>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600">Blogs</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-lg">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/blogs" className="block py-2 text-gray-700 hover:text-blue-600">Blogs</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link
            to="/login"
            className="block py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
