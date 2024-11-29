import axios from "axios";

const API_BASE_URL = "http://localhost:4000"; // Replace with your backend URL

const api = {
  registerUser: (userData) => axios.post(`${API_BASE_URL}/users/register`, userData),
  otpVerification: (otpData) => axios.post(`${API_BASE_URL}/users/verify-otp`, otpData),
  loginUser: (loginData) => axios.post(`${API_BASE_URL}/users/login`, loginData, { withCredentials: true })
  .then((response) => response)
      .catch((error) => {
        if (error.response) {
          // Handle error response from backend
          throw error.response.data;
        } else {
          throw { message: 'An error occurred. Please try again.' };
        }
      }), 
      dashboard: () => axios.get(`${API_BASE_URL}/dashboard/`, { withCredentials: true }),  // Corrected API call
      // Add other API calls as needed
  getMyPost: () => axios.get(`${API_BASE_URL}/posts/myPost`, {withCredentials: true}),//posts as parameter
  delPost: (id) => axios.delete(`${API_BASE_URL}/posts/deletePost/${id}`, {withCredentials: true}),
  createPost: (postData) =>
    axios.post(`${API_BASE_URL}/posts/post`, postData, { withCredentials: true }),
  getLocation: () =>
    axios.get(`${API_BASE_URL}/posts/location`),
};

export default api;