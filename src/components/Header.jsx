import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
   
        <a href="/">
        <div className="ml-3 flex items-center">
          <span className=" text-4xl font-serif text-white">SolarTrade</span>
        </div>
        </a>

        <nav className="flex space-x-8">
          <a href="/" className="text-white hover:text-gray-200 font-semibold hover:underline">Home</a>
          <a href="#" className="text-white hover:text-gray-200 font-semibold hover:underline">Platform</a>
          <a href="#" className="text-white hover:text-gray-200 font-semibold hover:underline">Contact us</a>
          <a href="#" className="text-white hover:text-gray-200 font-semibold hover:underline">About Developers</a>
        </nav>


        {/* Sign in Button */}

        <Link to="/sign-in" >
            <div>           
              <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
                <span className="relative z-10">Sign in</span>  {/* Ensures the text stays on top */}
                <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span> {/* Pseudo-element */}
              </button>
            </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
