// import React, { useState } from 'react';

// const Dashboard = () => {
//   // Mock data for testing
//   const [userDetails] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     solarUnits: 120,
//     role: 'User',
//   });

//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Excess Solar for Sale', units: 50, price: 100 },
//     { id: 2, title: 'Solar Units Available', units: 30, price: 60 },
//   ]);

//   const [formValues, setFormValues] = useState({
//     title: '',
//     units: '',
//     price: '',
//   });

//   // Mock data for buyer requests
//   const [requests, setRequests] = useState([
//     { id: 1, postId: 1, buyerName: 'Alice Smith', buyerEmail: 'alice@example.com', units: 20 },
//     { id: 2, postId: 1, buyerName: 'Bob Johnson', buyerEmail: 'bob@example.com', units: 10 },
//     { id: 3, postId: 2, buyerName: 'Charlie Brown', buyerEmail: 'charlie@example.com', units: 15 },
//   ]);

//   // Mock data for ongoing transactions
//   const [transactions, setTransactions] = useState([
//     { id: 1, postId: 1, status: 'In Progress', units: 20, price: 50, date: '2024-11-20' },
//     { id: 2, postId: 2, status: 'Completed', units: 10, price: 30, date: '2024-11-18' },
//     { id: 3, postId: 1, status: 'Pending', units: 15, price: 40, date: '2024-11-19' },
//   ]);

//   const [showTransactions, setShowTransactions] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   // Handle form submission to create a new post
//   const createPost = (e) => {
//     e.preventDefault();
//     if (formValues.title && formValues.units && formValues.price) {
//       const newPost = {
//         id: posts.length + 1,
//         ...formValues,
//       };
//       setPosts((prevPosts) => [...prevPosts, newPost]);
//       setFormValues({ title: '', units: '', price: '' });
//     } else {
//       alert('All fields are required!');
//     }
//   };

//   // Handle deleting a post
//   const deletePost = (id) => {
//     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
//   };

//   // Handle approving a request
//   const approveRequest = (requestId) => {
//     alert(`Request ID ${requestId} approved!`);
//     setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
//   };

//   // Handle declining a request
//   const declineRequest = (requestId) => {
//     alert(`Request ID ${requestId} declined!`);
//     setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
//   };

//   // Toggle the visibility of transactions
//   const toggleTransactions = () => {
//     setShowTransactions(!showTransactions);
//   };

//   return (
//     <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         {/* User Details Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-3xl font-poppins font-bold mb-4">
//             Welcome, {userDetails.name}!
//           </h2>
//           <p className="text-lg mb-2">Email: {userDetails.email}</p>
//           <p className="text-lg mb-2">Solar Units: {userDetails.solarUnits}</p>
//           <p className="text-lg">Role: {userDetails.role}</p>
//         </div>

//         {/* My Posts Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">My Posts</h2>
//           {posts && posts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {posts.map((post) => (
//                 <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                   <p className="text-sm mb-2">Units: {post.units}</p>
//                   <p className="text-sm mb-4">Price: ${post.price}</p>
//                   <button
//                     onClick={() => deletePost(post.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
//                   >
//                     Delete Post
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No posts yet. Create your first post below!</p>
//           )}
//         </div>

//         {/* Create Post Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">Create Post</h2>
//           <form onSubmit={createPost}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formValues.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Units</label>
//               <input
//                 type="number"
//                 name="units"
//                 value={formValues.units}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formValues.price}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
//             >
//               Post for Sale
//             </button>
//           </form>
//         </div>

//         {/* View Requests Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">View Requests</h2>
//           {requests.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {requests.map((req) => (
//                 <div key={req.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">{req.buyerName}</h3>
//                   <p className="text-sm mb-2">Email: {req.buyerEmail}</p>
//                   <p className="text-sm mb-2">Post ID: {req.postId}</p>
//                   <p className="text-sm mb-4">Units Requested: {req.units}</p>
//                   <button
//                     onClick={() => approveRequest(req.id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 mr-2"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => declineRequest(req.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
//                   >
//                     Decline
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No requests yet.</p>
//           )}
//         </div>

//         {/* My Transactions Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">My Transactions</h2>
//           <button
//             onClick={toggleTransactions}
//             className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 mb-4"
//           >
//             {showTransactions ? 'Hide Transactions' : 'View Transactions'}
//           </button>
//           {showTransactions && transactions.length > 0 ? (
//             <div>
//               <ul>
//                 {transactions.map((trans) => (
//                   <li key={trans.id} className="border-b py-4">
//                     <p className="font-semibold">
//                       Transaction ID: {trans.id} - Status: {trans.status}
//                     </p>
//                     <p className="text-sm">Units: {trans.units}</p>
//                     <p className="text-sm">Price: ${trans.price}</p>
//                     <p className="text-sm">Date: {trans.date}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             showTransactions && <p className="text-gray-600">No transactions yet.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;










// import React, { useState,useEffect } from 'react';
// import api from "./api"; 


// const Dashboard = () => {
// //   // Mock data for testing
// //   const [userDetails] = useState({
// //     name: 'John Doe',
// //     email: 'johndoe@example.com',
// //     solarUnits: 120,
// //     role: 'User',
// //   });
// const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   const [posts, setPosts] = useState([
//     { id: 1, title: 'Excess Solar for Sale', units: 50, price: 100 },
//     { id: 2, title: 'Solar Units Available', units: 30, price: 60 },
//   ]);

//   const [formValues, setFormValues] = useState({
//     title: '',
//     units: '',
//     price: '',
//   });

//   // Mock data for buyer requests
//   const [requests, setRequests] = useState([
//     { id: 1, postId: 1, buyerName: 'Alice Smith', buyerEmail: 'alice@example.com', units: 20 },
//     { id: 2, postId: 1, buyerName: 'Bob Johnson', buyerEmail: 'bob@example.com', units: 10 },
//     { id: 3, postId: 2, buyerName: 'Charlie Brown', buyerEmail: 'charlie@example.com', units: 15 },
//   ]);

//   // Mock data for ongoing transactions
//   const [transactions, setTransactions] = useState([
//     { id: 1, postId: 1, status: 'In Progress', units: 20, price: 50, date: '2024-11-20' },
//     { id: 2, postId: 2, status: 'Completed', units: 10, price: 30, date: '2024-11-18' },
//     { id: 3, postId: 1, status: 'Pending', units: 15, price: 40, date: '2024-11-19' },
//   ]);

//   const [showTransactions, setShowTransactions] = useState(false);

//   useEffect(() => {
//     // Fetch the user details from the session
//     const fetchUserData = async () => {
//       try {
//         const response = await api.dashboard();
//         setUser(response.data);  // User details are in the response data
//       } catch (err) {
//         setError('Failed to load user data');
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }



//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   // Handle form submission to create a new post
//   const createPost = (e) => {
//     e.preventDefault();
//     if (formValues.title && formValues.units && formValues.price) {
//       const newPost = {
//         id: posts.length + 1,
//         ...formValues,
//       };
//       setPosts((prevPosts) => [...prevPosts, newPost]);
//       setFormValues({ title: '', units: '', price: '' });
//     } else {
//       alert('All fields are required!');
//     }
//   };

//   // Handle deleting a post
//   const deletePost = (id) => {
//     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
//   };

//   // Handle approving a request
//   const approveRequest = (requestId) => {
//     alert(`Request ID ${requestId} approved!`);
//     setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
//   };

//   // Handle declining a request
//   const declineRequest = (requestId) => {
//     alert(`Request ID ${requestId} declined!`);
//     setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
//   };

//   // Toggle the visibility of transactions
//   const toggleTransactions = () => {
//     setShowTransactions(!showTransactions);
//   };

//   return (
    
      
    
//     <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         {/* User Details Section */}
//         <div>
//         {user ? (
//           <div>
//             <h1>Welcome, {user.name}</h1>
//             <p>Email: {user.email}</p>
//             <p>ID: {user.id}</p>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-3xl font-poppins font-bold mb-4">
//             Welcome, {userDetails.name}!
//           </h2>
//           <p className="text-lg mb-2">Email: {userDetails.email}</p>
//           <p className="text-lg mb-2">Solar Units: {userDetails.solarUnits}</p>
//           <p className="text-lg">Role: {userDetails.role}</p>
//         </div>

//         {/* My Posts Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">My Posts</h2>
//           {posts && posts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {posts.map((post) => (
//                 <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                   <p className="text-sm mb-2">Units: {post.units}</p>
//                   <p className="text-sm mb-4">Price: ${post.price}</p>
//                   <button
//                     onClick={() => deletePost(post.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
//                   >
//                     Delete Post
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No posts yet. Create your first post below!</p>
//           )}
//         </div>

   
  
//     <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         {/* User Details Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-3xl font-poppins font-bold mb-4">
//             Welcome, {userDetails.name}!
//           </h2>
//           <p className="text-lg mb-2">Email: {userDetails.email}</p>
//           <p className="text-lg mb-2">Solar Units: {userDetails.solarUnits}</p>
//           <p className="text-lg">Role: {userDetails.role}</p>
//         </div>

//         {/* My Posts Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">My Posts</h2>
//           {posts && posts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {posts.map((post) => (
//                 <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                   <p className="text-sm mb-2">Units: {post.units}</p>
//                   <p className="text-sm mb-2">Price: ${post.price}</p>
//                   <p className="text-sm mb-2">Price per Unit: ${post.pricePerUnit}</p>
//                   <p className="text-sm mb-2">Location ID: {post.locationId}</p>
//                   <p className="text-sm mb-4">Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
//                   <button
//                     onClick={() => deletePost(post.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
//                   >
//                     Delete Post
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No posts yet. Create your first post below!</p>
//           )}
//         </div>

//         {/* Create Post Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">Create Post</h2>
//           <form onSubmit={createPost}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formValues.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Units</label>
//               <input
//                 type="number"
//                 name="units"
//                 value={formValues.units}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formValues.price}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Seller ID</label>
//               <input
//                 type="number"
//                 name="sellerId"
//                 value={formValues.sellerId}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Location ID</label>
//               <input
//                 type="number"
//                 name="locationId"
//                 value={formValues.locationId}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Price per Unit</label>
//               <input
//                 type="number"
//                 name="pricePerUnit"
//                 value={formValues.pricePerUnit}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
//             >
//               Post for Sale
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>




//         {/* View Requests Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">View Requests</h2>
//           {requests.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {requests.map((req) => (
//                 <div key={req.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">{req.buyerName}</h3>
//                   <p className="text-sm mb-2">Email: {req.buyerEmail}</p>
//                   <p className="text-sm mb-2">Post ID: {req.postId}</p>
//                   <p className="text-sm mb-4">Units Requested: {req.units}</p>
//                   <button
//                     onClick={() => approveRequest(req.id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 mr-2"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => declineRequest(req.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
//                   >
//                     Decline
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No requests yet.</p>
//           )}
//         </div>

//         {/* My Transactions Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">My Transactions</h2>
//           <button
//             onClick={toggleTransactions}
//             className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 mb-4"
//           >
//             {showTransactions ? 'Hide Transactions' : 'View Transactions'}
//           </button>
//           {showTransactions && transactions.length > 0 ? (
//             <div>
//               <ul>
//                 {transactions.map((trans) => (
//                   <li key={trans.id} className="border-b py-4">
//                     <p className="font-semibold">
//                       Transaction ID: {trans.id} - Status: {trans.status}
//                     </p>
//                     <p className="text-sm">Units: {trans.units}</p>
//                     <p className="text-sm">Price: ${trans.price}</p>
//                     <p className="text-sm">Date: {trans.date}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             showTransactions && <p className="text-gray-600">No transactions yet.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;










import React, { useState, useEffect } from 'react';
import api from "./api"; 

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading , setIsLoading] = useState(false);
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

  const [transactions, setTransactions] = useState([
    { id: 1, postId: 1, status: 'In Progress', units: 20, price: 50, date: '2024-11-20' },
    { id: 2, postId: 2, status: 'Completed', units: 10, price: 30, date: '2024-11-18' },
    { id: 3, postId: 1, status: 'Pending', units: 15, price: 40, date: '2024-11-19' },
  ]);

  const [showTransactions, setShowTransactions] = useState(false);

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
    console.log("fdfdt",postId)
    setIsLoading(true);
    setError(null);
    
    try {
      // Send a DELETE request to the backend with the post ID
      const response = await api.delPost(postId);
      console.log("Post deleted:", response.data);
      
      // Remove the deleted post from the local state (or refetch posts)
      // Example: Set posts excluding the deleted one
      // setPosts(posts.filter(post => post.post_id !== postId));
              setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== postId));

    } catch (err) {
      setError(err.message || "Error deleting post");
      console.error("Error deleting post:", err);
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

  useEffect(() => {
    fetchUserData();
    fetchPosts();
    fetchLocations();
    getRequests();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }


  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  // const createPost = (e) => {
  //   e.preventDefault();
  //   if (formValues.title && formValues.units && formValues.price) {
  //     const newPost = {
  //       id: posts.length + 1,
  //       ...formValues,
  //     };
  //     setPosts((prevPosts) => [...prevPosts, newPost]);
  //     setFormValues({ title: '', units: '', price: '' });
  //   } else {
  //     alert('All fields are required!');
  //   }
  // };

  // const deletePost = (id) => {
  //   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  // };

  const approveRequest = async (trans_Id, units, post_id) => {
    try{
      const response = await api.approveReq(trans_Id, units, post_id)
      alert(`Transaction ID ${trans_Id} approved!`);
    }
    catch(err){
      setError(err.message || "Error approving post");
      console.error("Error deleting post:", err);
    }
    // setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
  };

  const declineRequest = (requestId) => {
    alert(`Request ID ${requestId} declined!`);
    setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
  };

  const toggleTransactions = () => {
    setShowTransactions(!showTransactions);
  };

  return (
    <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* User Details Section */}
        <div>
          {user ? (
            <div>
              <h1>Welcome, {user.user_name}</h1>
              <p>Email: {user.email}</p>
              {/* <p>ID: {user.id}</p> */}
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>

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

        {/* Create Post Section */}
        {/* <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
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
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
            >
              Post for Sale
            </button>
            </form>
        </div> */}




    <div>
      {/* Button to toggle the Create Post form */}
      <button
        onClick={toggleFormVisibility}
        className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 mb-4"
      >
        {isFormVisible ? 'Hide Create Post' : 'Create Post'}
      </button>

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
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <select
                name="location"
                value={formValues.location}
                onChange={handleInputChange}
                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                required
              >
                <option value="" className='text-black'>Select Location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div> */}

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
          


            <button
              type="submit"
              className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
            >
              Post for Sale
            </button>
          </form>
        </div>
      )}
    </div>


        {/* View Requests Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">View Requests</h2>
          {requests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {requests.map((req) => (
                <div key={req.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{req.user_name}</h3>
                  <p className="text-sm mb-2">Email: {req.email}</p>
                  <p className="text-sm mb-2">Post ID: {req.post_id}</p>
                  <p className="text-sm mb-4">Units Requested: {req.units}</p>
                  <button
                    onClick={() => approveRequest(req.trans_id, req.units, req.post_id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => declineRequest(req.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
                  >
                    Decline
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No requests yet.</p>
          )}
        </div>

        {/* Transactions Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">Transactions</h2>
          <button
            onClick={toggleTransactions}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 mb-4"
          >
            {showTransactions ? 'Hide' : 'Show'} Transactions
          </button>
          {showTransactions && transactions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transactions.map((txn) => (
                <div key={txn.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Post ID: {txn.postId}</h3>
                  <p className="text-sm mb-2">Units Sold: {txn.units}</p>
                  <p className="text-sm mb-2">Price: ${txn.price}</p>
                  <p className="text-sm mb-2">Status: {txn.status}</p>
                  <p className="text-sm">Date: {txn.date}</p>
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
