import axios from "axios";

const API_BASE_URL = "http://localhost:4000/users"; // Replace with your backend URL

const api = {
  registerUser: (userData) => axios.post(`${API_BASE_URL}/register`, userData),
  loginUser: (loginData) => axios.post(`${API_BASE_URL}/login`, loginData)
  .then((response) => response)
      .catch((error) => {
        if (error.response) {
          // Handle error response from backend
          throw error.response.data;
        } else {
          throw { message: 'An error occurred. Please try again.' };
        }
      }), 
  // Add other API calls as needed
};

export default api;
