import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/">
          <div className="ml-3 flex items-center">
            <span className="text-2xl sm:text-4xl font-serif text-white">SolarTrade</span>
          </div>
        </a>

        {/* Hamburger Button (visible on small screens) */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute sm:static top-full left-0 w-full sm:w-auto bg-emerald-800 sm:bg-transparent z-40 sm:flex sm:items-center sm:space-x-8 sm:mt-0`}
        >
          <a
            href="/"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Contact us
          </a>
          <a
            href="#"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            About Developers
          </a>
        </nav>

        {/* Sign-in Button */}
        <Link to="/sign-in">
          <div>
            <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
              <span className="relative z-10">Sign in</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span>
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
