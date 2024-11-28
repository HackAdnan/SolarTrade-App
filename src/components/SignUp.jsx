import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import api from "./api"; 

const SignUp = () => {
  // Handle form state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState(''); // For confirming password
  // const [userType, setUserType] = useState('buyer'); // Default to 'buyer'
  // const [address, setAddress] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null); // For capturing any error messages
  const [success, setSuccess] = useState(false); // To show success message after registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const userData = {
      username,
      email,
      password,
    };
  

    // if (password !== confirmPassword) {
    //   setError('Passwords do not match.');
    //   return;
    //}
    
    // // Prepare the payload to send to your backend
    const payload = {
      username,
      email,
      password,
    };

    // try {
    //   // Make a POST request to your backend API endpoint
    //   const response = await fetch('http://localhost:4000/users/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Success - handle successful registration (e.g., show success message, redirect, etc.)
    //     setSuccess(true);
    //     setError(null); // Clear any previous errors
    //     console.log('Registration successful:', data);
    //   } else {
    //     // Handle error - backend returned error
    //     setError(data.message || 'An error occurred. Please try again.');
    //   }
    // } catch (err) {
    //   // Catch network errors or unexpected issues
    //   console.error('Error:', err);
    //   setError('An error occurred. Please try again.');
    // }
    try {
      const response = await api.registerUser(userData);
      if (response.status === 200) {
        alert("User registered successfully!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error in registration. Please try again.");
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[900px]">
      <div className=" mt-10 px-50 bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">Sign Up</h2>

        {/* Success message */}
        {success && <p className="text-green-500 text-center mb-4">Registration successful! You can now sign in.</p>}

        {/* Display error message if there's one */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter your username"
              required
            />
          </div>

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
              Sign Up
            </button>
          </div>
        </form>

        {/* Link for SignIn */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-indigo-500 hover:text-indigo-600">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

// const SignupPage = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={userData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={userData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={userData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
