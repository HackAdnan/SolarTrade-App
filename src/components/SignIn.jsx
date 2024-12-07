import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import api from "./api"; 
import { checkSession } from './CheckSession';


const SignIn = () => {
  // Handle form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For capturing any error messages
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation (optional)
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Prepare the payload to send to your backend
    const payload = {
      email,
      password,
    };

        try {
      // Use the api helper to call the backend login endpoint
      const response = await api.loginUser(payload); // Assuming loginUser is defined in api.js

      if (response.data.token) {
        // Store the token (e.g., in localStorage or context)
        localStorage.setItem('authToken', response.data.token);
        
        // Redirect based on user role
        if (response.data.message.includes('Admin')) {
          // navigate('/#'); // Redirect to admin dashboard or wherever you want
          navigate("/admindashboard")
        } else {
          // navigate('/#'); // Redirect to user dashboard or home
          navigate("/dashboard")
        }

      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      if (err.response && err.response.data) {
        // Handle error from the backend (invalid user or password)
        setError(err.response.data.message || 'An error occurred. Please try again.');
      } else {
        // Handle any network or unexpected errors
        setError('An error occurred. Please try again.');
      }
      setError('An error occurred. Please try again.');
    }
  };




  //   // Prepare the payload to send to your backend
  //   const payload = {
  //     email,
  //     password,
  //   };

  //   try {
  //     // Make a POST request to your backend API endpoint
  //     const response = await fetch('http://localhost:5000/api/sign-in', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // Success - handle successful login (e.g., store token, redirect, etc.)
  //       console.log('Login successful:', data);
  //       // Redirect or perform any action
  //     } else {
  //       // Handle error - backend returned error
  //       setError(data.message || 'An error occurred. Please try again.');
  //     }
  //   } catch (err) {
  //     // Catch network errors or unexpected issues
  //     console.error('Error:', err);
  //     setError('An error occurred. Please try again.');
  //   }
  // };

  return (
    <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[660px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">Sign In</h2>
        
        {/* Display error message if there's one */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
     
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Link for Register */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-indigo-500 hover:text-indigo-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;









  

// return (
//   <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[660px]">
//     <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//       <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">Sign In</h2>
      
//       {/* Display error message if there's one */}
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Email Field */}
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Password Field */}
//         <div>
//           <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
//           >
//             Sign In
//           </button>
//         </div>
//       </form>

//       {/* Link for Register */}
//       <p className="mt-6 text-center text-sm text-gray-600">
//         Don't have an account?{' '}
//         <Link to="/sign-up" className="text-indigo-500 hover:text-indigo-600">Sign up</Link>
//       </p>
//     </div>
//   </div>
// );
// };

// export default SignIn;
