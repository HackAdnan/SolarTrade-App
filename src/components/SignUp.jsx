// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import api from "./api"; 

// const SignUp = () => {
//   // Handle form state
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [error, setError] = useState(null); // For capturing any error messages
//   const [success, setSuccess] = useState(false); // To show success message after registration
//   const [otpSent, setOtpSent] = useState(false);
//   const [enteredOtp, setEnteredOtp] = useState('');
//   const [registrationComplete, setRegistrationComplete] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple form validation
//     if (!username || !email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }
//     const userData = {
//       username,
//       email,
//       password,
//     };
//     // if (password !== confirmPassword) {
//     //   setError('Passwords do not match.');
//     //   return;
//     //}
//      // Simulate OTP sending
//      setOtpSent(true);
//      setError(null);
//        // // Prepare the payload to send to your backen   
//     try {
//       const response = await api.registerUser(userData);
//       if (response.status === 200) {
//         alert("User registered successfully!");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert("Error in registration. Please try again.");
//     }
//   };   

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();

//     if (enteredOtp === hardcodedOtp) {
//       setRegistrationComplete(true);
//       setError(null);

//       // Automatically navigate to sign-in page after 2 seconds
//       setTimeout(() => {
//         navigate('/sign-in');
//       }, 2000);
//     } else {
//       setRegistrationComplete(false);
//       setError('Incorrect OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[900px]">
//       <div className="mt-10 px-50 bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//         <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">
//           {otpSent ? 'Verify OTP' : 'Sign Up'}
//         </h2>

//         {success && (
//           <p className="text-green-500 text-center mb-4">
//             Registration successful! Redirecting to sign-in page...
//           </p>
//         )}

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         {!otpSent ? (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//             <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>


//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         ) : (
//           <form onSubmit={handleVerifyOtp} className="space-y-6">
//             <div>
//               <label htmlFor="otp" className="block text-gray-700 font-semibold">Enter OTP</label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={enteredOtp}
//                 onChange={(e) => setEnteredOtp(e.target.value)}
//                 className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
//                 placeholder="Enter the OTP sent to your email"
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
//               >
//                 Verify OTP
//               </button>
//             </div>
//           </form>
//         )}

//         {!otpSent && (
//           <p className="mt-6 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/sign-in" className="text-indigo-500 hover:text-indigo-600">Sign in</Link>
//           </p>
//         )}

//         {otpSent && !registrationComplete && (
//           <p className="mt-6 text-center text-sm text-gray-600">
//             Didn't get the OTP?{' '}
//             <button
//               className="text-indigo-500 hover:text-indigo-600"
//               onClick={() => setOtpSent(false)}
//             >
//               Go back to Sign Up
//             </button>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// // const SignupPage = () => {
// //   const [userData, setUserData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setUserData({ ...userData, [name]: value });
//   // };



// //   return (
// //     <div>
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="username"
// //           placeholder="Username"
// //           value={userData.username}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={userData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={userData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignupPage;













import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import api from './api';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const [user, setUser] = useState({});

  // Handle registration form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const userData = { username, email, password };
    setError(null);
    try {
      // Send registration request
      const response = await api.registerUser(userData);
      if (response.status === 200) {
        console.log(response.data, "handle submit")
        setUser(response.data.user)
        alert('User registered successfully!');
        setOtpSent(true); // Show OTP verification form
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error in registration. Please try again.');
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!enteredOtp) {
      setError('Please enter the OTP.');
      return;
    }

    try {
      const userData = { user, enteredOtp: enteredOtp };
      const response = await api.otpVerification(userData);

      if (response.status === 200) {
        setRegistrationComplete(true);
        setError(null);
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000);
      }
    } catch (error) {
      setRegistrationComplete(false);
      setError('Incorrect or expired OTP. Please try again.');
    }
  };
  const validateEmail = (email) => {
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailPattern.test(email);
  };
  
  return (
    <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[900px]">
      <div className="mt-10 px-50 bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">
          {otpSent ? 'Verify OTP' : 'Sign Up'}
        </h2>

        {success && (
          <p className="text-green-500 text-center mb-4">
            Registration successful! Redirecting to sign-in page...
          </p>
        )}

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {!otpSent ? (
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

            {/* <div>
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
            </div> */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
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

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-gray-700 font-semibold">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
                placeholder="Enter the OTP sent to your email"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}

        {!otpSent && (
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-indigo-500 hover:text-indigo-600">Sign in</Link>
          </p>
        )}

        {otpSent && !registrationComplete && (
          <p className="mt-6 text-center text-sm text-gray-600">
            Didn't get the OTP?{' '}
            <button
              className="text-indigo-500 hover:text-indigo-600"
              onClick={() => setOtpSent(false)}
            >
              Go back to Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
