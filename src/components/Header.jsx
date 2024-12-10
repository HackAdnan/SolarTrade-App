// import { Link, useNavigate } from 'react-router-dom';
// import React, { useEffect, useState} from 'react';
// import api from './api';

// const Header = () => {
//   const [userRole, setUserRole] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track session existence
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await api.logout(); // Call the logout API
//       navigate('/sign-in'); // Redirect to the sign-in page
//       sessionStorage.removeItem('user'); // If you're using sessionStorage
//     } catch (error) {
//       console.error('Logout failed:', error.message);
//     }
//   };

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const response = await api.getSession(); // Example API call to check session
//         console.log(response.data.sessionExists,"session")
//         console.log(response.data.user,"session")
//         if (response.data.user) {
//           setIsLoggedIn(true);
//           // const roleResponse = await api.getRole();
//           setUserRole(response.data.user.role); // Set the user role
//         }
//       } catch (error) {
//         console.error('Error checking session:', error);
//       }
//     };

//     checkSession();
//   }, []);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
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
//           className={`${isMenuOpen ? 'block' : 'hidden'
//             } absolute sm:static top-full left-0 w-full sm:w-auto bg-emerald-800 sm:bg-transparent z-40 sm:flex sm:items-center sm:space-x-8 sm:mt-0`}
//         >
//           <Link
//             to="/"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Home
//           </Link>
//           <Link
//             to={userRole === 'Admin' ? '/admindashboard' : '/dashboard'}
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Dashboard
//           </Link>
//            {userRole === 'Admin' && (
//             <Link
//               to="/admindashboard"
//               className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//             >
//               All Recurring
//             </Link>
//           )}
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

//         {/* Sign-in Button */}
//         {/* <Link to="/sign-in">
//           <div>
//             <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
//               <span className="relative z-10">Sign in</span>
//               <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span>
//             </button>
//           </div>
//         </Link> */}
//          {isLoggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group"
//           >
//             <span className="relative z-10">Logout</span>
//             <span className="absolute top-0 left-0 w-0 h-full bg-red-600 group-hover:w-full transition-all duration-300 z-0"></span>
//           </button>
//         ) : (
//           <Link to="/sign-in">
//             <div>
//               <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
//                 <span className="relative z-10">Sign in</span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span>
//               </button>
//             </div>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;





// import { Link, useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import api from './api';
// import { checkSession } from './CheckSession';

// const Header = () => {
//   const navigate = useNavigate();
//   const [userRole, setUserRole] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);



//   const handleLogout = async () => {
//     try {
//       await api.logout();
//       sessionStorage.removeItem('user'); // Agar sessionStorage ka use ho raha hai
//       setIsLoggedIn(false); // Logout ke baad isLoggedIn false karna zaroori hai
//       setUserRole(null); // Role clear kar do
//       navigate('/sign-in');
//     } catch (error) {
//       console.error('Logout failed:', error.message);
//     }
//   };

//   // export const checkSession = async () => {
//   //   try {
//   //     console.log("useEffect")
//   //     const response = await api.getSession();
//   //     console.log('Session Response:', response.data);
//   //     console.log(response.data.user,"yser response")
//   //     if (response.data && response.data.user) {
//   //       setIsLoggedIn(true);
//   //       setUserRole(response.data.user.role); // Role ko set karo
//   //     } else {
//   //       setIsLoggedIn(false);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error checking session:', error.message);
//   //     setIsLoggedIn(false); // Agar error aaye, isLoggedIn false kar do
//   //   }
//   // };

//   // useEffect(() => { 
//   //   // if (isLoggedIn) { // Only call if the user is logged in
//   //   //   checkSession();
//   //   // }
//   //   checkSession();
//   // }, []);
//   useEffect(() => {
//     const checkUserSession = async () => {
//       const session = await checkSession();
//       setIsLoggedIn(session.isLoggedIn);
//       setUserRole(session.userRole);
//     };

//     checkUserSession();
//   }, [isLoggedIn]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link to="/">
//           <div className="ml-3 flex items-center">
//             <span className="text-2xl sm:text-4xl font-serif text-white">SolarTrade</span>
//           </div>
//         </Link>

//         {/* Hamburger Button */}
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
//           className={`${isMenuOpen ? 'block' : 'hidden'
//             } absolute sm:static top-full left-0 w-full sm:w-auto bg-emerald-800 sm:bg-transparent z-40 sm:flex sm:items-center sm:space-x-8 sm:mt-0`}
//         >
//           <Link
//             to="/"
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Home
//           </Link>
//           <Link
//             to={userRole === 'Admin' ? '/admindashboard' : '/dashboard'}
//             className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//           >
//             Dashboard
//           </Link>
//           {userRole === 'Admin' && (
//             <Link
//               to="/admindashboard"
//               className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
//             >
//               All Recurring
//             </Link>
//           )}
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

//         {/* Login/Logout Button */}
//         {isLoggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group"
//           >
//             <span className="relative z-10">Logout</span>
//             <span className="absolute top-0 left-0 w-0 h-full bg-red-600 group-hover:w-full transition-all duration-300 z-0"></span>
//           </button>
//         ) : (
//           <Link to="/sign-in">
//             <div>
//               <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
//                 <span className="relative z-10">Sign in</span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span>
//               </button>
//             </div>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;






//last
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from './api';
import { checkSession } from './CheckSession';
import { login, logout, setUserRole } from '../authSlice'; // Redux actions

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userRole } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await api.logout();
      sessionStorage.removeItem('user');
      dispatch(logout());  // Update Redux state
      navigate('/sign-in');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  useEffect(() => {
    const checkUserSession = async () => {
      const session = await checkSession();
      if (session.isLoggedIn) {
        console.log("in if in header")
        dispatch(login({ role: session.userRole }));  // Set role if logged in
      }
      else {
        dispatch(logout());  // Make sure to log out if session is not valid
      }
    };
    checkUserSession();
  }, [dispatch]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <div className="ml-3 flex items-center">
            <span className="text-2xl sm:text-4xl font-serif text-white">SolarTrade</span>
          </div>
        </Link>

        {/* Hamburger Button */}
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
          className={`${isMenuOpen ? 'block' : 'hidden'
            } absolute sm:static top-full left-0 w-full sm:w-auto bg-emerald-800 sm:bg-transparent z-40 sm:flex sm:items-center sm:space-x-8 sm:mt-0`}
        >
          <Link to="/" className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2">Home</Link>
          {isLoggedIn && (
            <Link
              to={userRole === 'Admin' ? '/admindashboard' : '/dashboard'}
              className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
            >
              Dashboard
            </Link>
          )}
          {userRole === 'Admin' && (
            <Link
              to="/recurringposts"
              className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2"
            >
              All Recurring
            </Link>
          )}
          <Link to="/marketplace" className="block1 sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2">
            Marketplace
          </Link>
          <Link to="#" className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2">
            Contact Us
          </Link>
          <Link to="#" className="block sm:inline-block text-white hover:text-gray-200 font-semibold hover:underline px-4 py-2">
            About Developers
          </Link>
        </nav>

        {/* Login/Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group"
          >
            <span className="relative z-10">Logout</span>
            <span className="absolute top-0 left-0 w-0 h-full bg-red-600 group-hover:w-full transition-all duration-300 z-0"></span>
          </button>
        ) : (
          <Link to="/sign-in">
            <button className="bg-emerald-500 text-white mr-3 px-4 py-2 rounded relative overflow-hidden group">
              <span className="relative z-10">Sign in</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-teal-500 group-hover:w-full transition-all duration-300 z-0"></span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
