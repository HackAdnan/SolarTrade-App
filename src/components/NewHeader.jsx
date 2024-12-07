// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from "./api";

// const NewHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const handleLogout = async () => {
//     try {
//       await api.logout(); // Call the logout API
//       navigate('/sign-in'); // Redirect to the sign-in page
//     } catch (error) {
//       console.error('Logout failed:', error.message);
//     }
//   };

//   return (
//     <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link to="/">
//           <div className="ml-3 flex items-center">
//             <span className="text-2xl sm:text-4xl font-serif text-white">SolarTrade</span>
//           </div>
//         </Link>

//         {/* Hamburger Button (visible on small screens) */}
//         <button
//           className="text-white sm:hidden focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//             />
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isMenuOpen ? 'block' : 'hidden'
//           } absolute sm:static top-full left-0 w-full sm:w-auto bg-emerald-800 sm:bg-transparent z-40 sm:flex sm:items-center sm:space-x-8 sm:mt-0`}
//         >
//           <Link
//             to="/"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Home
//           </Link>
//           <Link
//             to="/marketplace"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Marketplace
//           </Link>
//           <Link
//             to="#"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="#"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             About Developers
//           </Link>
//         </nav>


//         {/* Logout Button */}
//         <Link to="/logout">
//           <div>
//             {/* <button className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
//               <span className="relative z-10">Logout</span>
//               <span className="absolute top-0 left-0 w-0 h-full bg-red-700 group-hover:w-full transition-all duration-300 z-0"></span>
//             </button> */}
//             <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group"
//         >
//           <span className="relative z-10">Logout</span>
//           <span className="absolute top-0 left-0 w-0 h-full bg-red-700 group-hover:w-full transition-all duration-300 z-0"></span>
//         </button>
//           </div>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default NewHeader;




import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import api from "./api";

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = async () => {
    try {
      await api.logout(); // Call the logout API
      navigate('/sign-in'); // Redirect to the sign-in page
      sessionStorage.removeItem('user'); // If you're using sessionStorage
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <div className="ml-3 flex items-center">
            <span className="text-2xl sm:text-4xl font-serif text-white">SolarTrade</span>
          </div>
        </Link>

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
          <Link
            to="/"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Dashboard
          </Link>
          <Link
            to="/marketplace"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Marketplace
          </Link>
          <Link
            to="#"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            Contact Us
          </Link>
          <Link
            to="#"
            className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
          >
            About Developers
          </Link>
        </nav>

        {/* Logout Button */}
        <Link to="/logout">
          <div>
          <button
          onClick={handleLogout}
          className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group"
        >
          <span className="relative z-10">Logout</span>
          <span className="absolute top-0 left-0 w-0 h-full bg-red-700 group-hover:w-full transition-all duration-300 z-0"></span>
        </button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NewHeader;