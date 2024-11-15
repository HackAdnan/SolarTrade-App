import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignUp = () => {
  // Handle form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirming password
  const [userType, setUserType] = useState('buyer'); // Default to 'buyer'
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null); // For capturing any error messages
  const [success, setSuccess] = useState(false); // To show success message after registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password || !confirmPassword || !userType || !address || !phoneNumber) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Prepare the payload to send to your backend
    const payload = {
      email,
      password,
      userType,
      address,
      phoneNumber,
    };

    try {
      // Make a POST request to your backend API endpoint
      const response = await fetch('http://localhost:5000/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - handle successful registration (e.g., show success message, redirect, etc.)
        setSuccess(true);
        setError(null); // Clear any previous errors
        console.log('Registration successful:', data);
      } else {
        // Handle error - backend returned error
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      // Catch network errors or unexpected issues
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
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

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* User Type Selection */}
          <div className="mt-4">
            <span className="text-gray-700 font-semibold">User Type:</span>
            <div className="mt-2 flex items-center space-x-4">
              <label className='text-black'>
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  checked={userType === 'buyer'}
                  onChange={() => setUserType('buyer')}
                  className="mr-2"
                />
                Buyer
              </label>
              <label className='text-black'>
                <input
                  type="radio"
                  name="userType"
                  value="seller"
                  checked={userType === 'seller'}
                  onChange={() => setUserType('seller')}
                  className="mr-2"
                />
                Seller
              </label>
            </div>
          </div>

          {/* Home Address Field */}
          <div>
            <label htmlFor="address" className="block text-gray-700 font-semibold">Home Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter your home address"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter your phone number"
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
