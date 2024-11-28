import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('buyer');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const hardcodedOtp = '123456'; // Hardcoded OTP for frontend demo

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !userType || !address || !phoneNumber) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate OTP sending
    setOtpSent(true);
    setError(null);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (enteredOtp === hardcodedOtp) {
      setRegistrationComplete(true);
      setError(null);

      // Automatically navigate to sign-in page after 2 seconds
      setTimeout(() => {
        navigate('/sign-in');
      }, 2000);
    } else {
      setRegistrationComplete(false);
      setError('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[900px]">
      <div className="mt-10 px-50 bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl text-center text-black mb-8 font-bold font-poppins">
          {otpSent ? 'Verify OTP' : 'Sign Up'}
        </h2>

        {registrationComplete && (
          <p className="text-green-500 text-center mb-4">
            Registration successful! Redirecting to sign-in page...
          </p>
        )}

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="mt-4">
              <span className="text-gray-700 font-semibold">User Type:</span>
              <div className="mt-2 flex items-center space-x-4">
                <label className="text-black">
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
                <label className="text-black">
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
