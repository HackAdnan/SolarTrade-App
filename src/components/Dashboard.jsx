import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from "./api";

const Dashboard = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/sign-in');
    }

  }, [isLoggedIn, navigate]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    units: '',
    price: '',
    location: ''
  });

  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  // const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle function
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  const [requests, setRequests] = useState([]);

  const [recTransactions, setRecTransactions] = useState([]);
  const [recTransactions2, setRecTransactions2] = useState([]);

  const [showTransactions, setShowTransactions] = useState(false);
  const [showTransactions2, setShowTransactions2] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await api.dashboard();
      setUser(response.data); // Assuming the user details are in response.data
    } catch (err) {
      setError('Failed to load user data');
    }
  }
  const fetchPosts = async () => {
    try {
      const response = await api.getMyPost();
      setPosts(response.data.posts);
    } catch (err) {
      setError("Error fetching posts");
      console.error(err);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await api.getLocation(); // Fetch locations using api.js
      setLocations(response.data.locations); // Set the locations data to state
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    }
  };

  const deletePost = async (postId) => {
    console.log("Deleting post with ID:", postId);
    setIsLoading(true);
    setError(null);

    try {
      // Send a DELETE request to the backend with the post ID
      const response = await api.delPost(postId);

      if (response.status === 200) {
        console.log("Post deleted successfully:", response.data);

        // Remove the deleted post from the local state
        setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== postId));
      } else {
        // Handle non-200 responses
        console.error("Unexpected response status:", response.status);
        alert("Failed to delete the post. Integrity Constraint.");
      }
    } catch (err) {
      // Check if the error is due to a 500 response
      if (err.response && err.response.status === 500) {
        alert("Failed to delete the post. Integrity Constraint.");
        return;
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      console.error("Error deleting post:", err);
      setError(err.message || "Error deleting post");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'units' || name === 'price') && value <= 0) {
      // Optionally, set to 0 or show an error message
      setFormValues({
        ...formValues,
        [name]: '',  // Reset to 0 or you can keep it empty
      });
      return;  // Exit early to prevent setting negative values
    }
    setFormValues({
      ...formValues,
      [name]: value
    });

  }

  // Form submission handler
  const handleSubmit = async (e) => {
    console.log("hjdfsjf")
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const postData = {
        units: parseInt(formValues.units),
        price_per_unit: parseInt(formValues.price),
        location_id: parseInt(formValues.location)
      };

      // Call the API to create the post
      const response = await api.createPost(postData);
      console.log('Post created:', response.data);

      // Reset the form and show success message
      setFormValues({ units: '', price: '', location_id: '' });
      setSuccess(true);
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.response?.data?.error || 'An error occurred while creating the post');
    }
  };

  const getRequests = async () => {
    try {
      const response = await api.getRequests();
      setRequests(response.data.posts); // Assuming the user details are in response.data
    } catch (err) {
      setError('Failed to load request posts');
    }
  }

  const getRecPost = async () => {
    try {
      const response = await api.getRecPost();
      setRecTransactions(response.data.posts); // Assuming the user details are in response.data
      setRecTransactions2(response.data.posts2)
    } catch (err) {
      setError('Failed to load Rec posts');
    }
  }

  const [activeTab, setActiveTab] = useState("posts"); // Default tab



  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {
    fetchUserData();
    fetchPosts();
    fetchLocations();
    getRequests();
    getRecPost();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const [approvedRequests, setApprovedRequests] = useState([]); // Track approved requests

  const approveRequest = async (trans_Id, units, post_id) => {
    try {
      console.log("send api")
      await api.approveReq(trans_Id, units, post_id);
      // Update the request's status to 'Progress' after successful approval
      console.log("update req")
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.trans_id === trans_Id ? { ...req, status: "Progress" } : req
        )
      );
      console.log("reload")
      // window.location.reload(); // Reload the page to reflect the changes
      alert(`Transaction ID ${trans_Id} approved!`);
    } catch (err) {
      setError(err.message || "Error approving transaction");
      console.error("Error approving transaction:", err);
    }
  };


  const declineRequest = (requestId) => {
    alert(`Request ID ${requestId} declined!`);
    setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
  };

  const toggleTransactions = () => {
    setShowTransactions(!showTransactions);
  };
  const toggleTransactions2 = () => {
    setShowTransactions2(!showTransactions2);
  };


  return (
    <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-screen-lg">
        {/* User Details Section */}
        {user ? (
    <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 mb-8 transform transition hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="bg-white text-blue-500 rounded-full p-4 shadow-md border-4 border-blue-500"> {/* Outline added here */}
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
              strokeWidth="2"
              d="M5.121 17.804A1.803 1.803 0 016 17.1V7a4 4 0 118 0v10.1c.288.188.47.511.47.894a1.803 1.803 0 11-1.117-1.695V7a2 2 0 10-4 0v10.1a1.803 1.803 0 11-1.117-1.695v.999"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold ml-4 font-poppins">
          Welcome, {user.user_name}!
        </h2>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <strong className="font-semibold">Name:</strong> {user.user_name}
        </p>
        <p className="text-lg">
          <strong className="font-semibold">Email:</strong> {user.email}
        </p>
      </div>
    </div>
  ) : (
    <p className="text-gray-200 animate-pulse">Loading user details...</p>
  )}

        {/* My Posts Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">My Posts</h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
                  <p className="text-sm mb-2">Units: {post.units}</p>
                  <p className="text-sm mb-4">Price: ${post.price_per_unit}</p>
                  <button
                    onClick={() => deletePost(post.post_id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
                  >
                    Delete Post
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No posts yet. Create your first post below!</p>
          )}
        </div>

        <div>
          {/* Button to toggle the Create Post form */}
          <div className="flex justify-center">
            <button
              onClick={toggleFormVisibility}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 mb-4"
            >
              {isFormVisible ? 'Hide Create Post' : 'Create Post'}
            </button>
          </div>


          {/* Create Post Form Section */}
          {isFormVisible && (
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-poppins font-bold mb-4">Create Post</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Units</label>
                  <input
                    type="number"
                    name="units"
                    value={formValues.units}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formValues.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Location</label>
                  <select
                    name="location"
                    value={formValues.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location.loc_id} value={location.loc_id}>
                        {location.address}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
                  >
                    Post for Sale
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">View Requests</h2>
          {requests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {requests.map((req) => (
                <div key={req.trans_id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{req.user_name}</h3>
                  <p className="text-sm mb-2">Email: {req.email}</p>
                  <p className="text-sm mb-2">Post ID: {req.post_id}</p>
                  <p className="text-sm mb-4">Units Requested: {req.units}</p>

                  <button
                    onClick={() => approveRequest(req.trans_id, req.units, req.post_id)}
                    disabled={req.status === "Progress"} // Disable if status is 'Progress'
                    className={`px-4 py-2 rounded-full font-semibold mr-2 ${req.status === "Progress"
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                        : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                  >
                    {req.status === "Progress" ? "Approved" : "Approve"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No requests available.</p>
          )}
        </div>
        {/* Transactions Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">Sold To</h2>
          <button
            onClick={toggleTransactions}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 mb-4"
          >
            {showTransactions ? 'Hide' : 'Show'} Transactions
          </button>
          {showTransactions && recTransactions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recTransactions.map((txn) => (
                <div key={txn.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Post ID: {txn.post_id}</h3>
                  <p className="text-sm mb-2">Buyer Name: {txn.user_name}</p>
                  <p className="text-sm mb-2">Email: {txn.email}</p>
                  <p className="text-sm mb-2">Units Sold: {txn.units}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No transactions yet.</p>
          )}
        </div>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">Bought By</h2>
          <button
            onClick={toggleTransactions2}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 mb-4"
          >
            {showTransactions2 ? 'Hide' : 'Show'} Transactions
          </button>
          {showTransactions2 && recTransactions2.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recTransactions2.map((txn) => (
                <div key={txn.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Post ID: {txn.post_id}</h3>
                  <p className="text-sm mb-2">Seller Name: {txn.user_name}</p>
                  <p className="text-sm mb-2">Email: {txn.email}</p>
                  <p className="text-sm mb-2">Units Bought: {txn.units}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No transactions yet.</p>
          )}
        </div>
      </div>


    </section>
  );
};

export default Dashboard;