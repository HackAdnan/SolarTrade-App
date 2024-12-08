// import React, { useState, useEffect } from 'react';
// import api from './api';

// const Marketplace = () => {
//   const [error, setError] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [purchaseUnits, setPurchaseUnits] = useState('');
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // Handle opening the popup
//   const openPopup = (post) => {
//     setSelectedPost(post);
//     setPurchaseUnits('');
//     setIsPopupOpen(true);
//   };

//   // Handle closing the popup
//   const closePopup = () => {
//     setSelectedPost(null);
//     setPurchaseUnits('');
//     setIsPopupOpen(false);
//   };

//   const fetchPosts = async () => {
//     try {
//       const response = await api.getAllPost();
//       setPosts(response.data.posts);
//     } catch (err) {
//       setError('Error fetching posts');
//       console.error(err);
//     }
//   };

//   // Handle form submission
//   const handlePurchase = async (e) => {
//     e.preventDefault();

//     // Validate units
//     if (!purchaseUnits || isNaN(purchaseUnits) || purchaseUnits <= 0) {
//       alert('Please enter a valid number of units.');
//       return;
//     }
//     if (purchaseUnits > selectedPost.units) {
//       alert('Requested units exceed available units.');
//       return;
//     }

//     // Create transaction data
//     const transactionData = {
//       post_id: selectedPost.post_id,
//       units_bought: parseInt(purchaseUnits),
//       total_price: purchaseUnits * selectedPost.price_per_unit,
//       status: 'Pending',
//     };

//     try {
//       // Post transaction data to the backend
//       const response = await api.createTransaction(transactionData);
//       if (response.status === 401) { return Promise.reject(error);}
//       if (response.status === 200) {
//         console.log("aasiu")
//         alert('Transaction created successfully!');
//         closePopup();
//         console.log("aas")
//         fetchPosts(); // Refresh posts to update available units
//       } else {
//         alert('Error creating transaction.',response.status);
//       }
//     } catch (err) {
//       alert('Error creating transaction.');
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <section className="marketplace bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-poppins font-bold mb-8">Marketplace</h2>
//         {posts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((post) => (
//               <div key={post.post_id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//                 <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
//                 <p className="text-sm mb-2">Units: {post.units}</p>
//                 <p className="text-sm mb-4">Price per Unit: ${post.price_per_unit}</p>
//                 <button
//                   onClick={() => openPopup(post)}
//                   className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
//                 >
//                   Buy
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600">No posts yet. Create your first post below!</p>
//         )}

//         {/* Popup Dialog */}
//         {isPopupOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96">
//               <h3 className="text-xl font-semibold mb-4">Buy Solar Units</h3>
//               <p className="mb-2">Post: {selectedPost.post_id}</p>
//               <p className="mb-2">Available Units: {selectedPost.units}</p>
//               <p className="mb-4">Price per Unit: ${selectedPost.price_per_unit}</p>
//               <form onSubmit={handlePurchase}>
//                 <label className="block text-gray-700 font-semibold mb-2">Enter Units:</label>
//                 <input
//                   type="number"
//                   value={purchaseUnits}
//                   onChange={(e) => setPurchaseUnits(e.target.value)}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none mb-4"
//                   min="1"
//                   required
//                 />
//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     onClick={closePopup}
//                     className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 mr-2"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
//                   >
//                     Confirm Purchase
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Marketplace;





// import React, { useState, useEffect } from 'react';
// import api from './api';

// const Marketplace = () => {
//   const [error, setError] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(''); // Store selected location

//   const fetchPosts = async (location = '') => {
//     try {
//       const response = location
//         ? await api.getPostsByLocation(location) // Fetch posts for selected location
//         : await api.getAllPost(); // Fetch all posts if no location selected
//       setPosts(response.data.posts);
//     } catch (err) {
//       setError('Error fetching posts');
//       console.error(err);
//     }
//   };

//   const fetchLocations = async () => {
//     try {
//       const response = await api.getLocation(); // Fetch locations
//       setLocations(response.data.locations);
//     } catch (error) {
//       console.error('Failed to fetch locations:', error);
//     }
//   };

//   const handleLocationChange = (e) => {
//     setSelectedLocation(e.target.value); // Update selected location
//     fetchPosts(e.target.value); // Fetch posts for the new location
//   };

//   useEffect(() => {
//     fetchPosts(); // Initial fetch for all posts
//     fetchLocations(); // Fetch available locations
//   }, []);

//   return (
//     <section className="marketplace bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-poppins font-bold mb-8">Marketplace</h2>

//         {/* Location Dropdown */}
//         <div className="mb-6">
//           <select
//             name="location"
//             value={selectedLocation}
//             onChange={handleLocationChange}
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none bg-white text-gray-800"
//           >
//             <option value="">All Locations</option>
//             {locations.map((location) => (
//               <option key={location.loc_id} value={location.loc_id}>
//                 {location.address}
//               </option>
//             ))}
//           </select>
//         </div>

//         {posts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((post) => (
//               <div key={post.post_id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//                 <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
//                 <p className="text-sm mb-2">Units: {post.units}</p>
//                 <p className="text-sm mb-4">Price per Unit: ${post.price_per_unit}</p>
//                 <button
//                   onClick={() => openPopup(post)}
//                   className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
//                 >
//                   Buy
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600">No posts available for this location.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Marketplace;





















import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from './api';

const Marketplace = () => {
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [purchaseUnits, setPurchaseUnits] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Access user role from Redux
  const { userRole } = useSelector((state) => state.auth);

  // Handle opening the popup
  const openPopup = (post) => {
    setSelectedPost(post);
    setPurchaseUnits('');
    setIsPopupOpen(true);
  };

  // Handle closing the popup
  const closePopup = () => {
    setSelectedPost(null);
    setPurchaseUnits('');
    setIsPopupOpen(false);
  };

  const fetchPosts = async () => {
    try {
      const response = await api.getAllPost();
      setPosts(response.data.posts);
    } catch (err) {
      setError('Error fetching posts');
      console.error(err);
    }
  };

  // Handle form submission
  const handlePurchase = async (e) => {
    e.preventDefault();

    // Validate units
    if (!purchaseUnits || isNaN(purchaseUnits) || purchaseUnits <= 0) {
      alert('Please enter a valid number of units.');
      return;
    }
    if (purchaseUnits > selectedPost.units) {
      alert('Requested units exceed available units.');
      return;
    }

    // Create transaction data
    const transactionData = {
      post_id: selectedPost.post_id,
      units_bought: parseInt(purchaseUnits),
      total_price: purchaseUnits * selectedPost.price_per_unit,
      status: 'Pending',
    };

    try {
      // Post transaction data to the backend
      const response = await api.createTransaction(transactionData);
      if (response.status === 401) {
        return Promise.reject(error);
      }
      if (response.status === 200) {
        alert('Transaction created successfully!');
        closePopup();
        fetchPosts(); // Refresh posts to update available units
      } else {
        alert('Error creating transaction.', response.status);
      }
    } catch (err) {
      alert('Error creating transaction.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="marketplace bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-8">Marketplace</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.post_id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
                <p className="text-sm mb-2">Units: {post.units}</p>
                <p className="text-sm mb-4">Price per Unit: ${post.price_per_unit}</p>
                {userRole !== 'Admin' && (
                  <button
                    onClick={() => openPopup(post)}
                    className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
                  >
                    Buy
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No posts yet. Create your first post below!</p>
        )}

        {/* Popup Dialog */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-semibold mb-4">Buy Solar Units</h3>
              <p className="mb-2">Post: {selectedPost.post_id}</p>
              <p className="mb-2">Available Units: {selectedPost.units}</p>
              <p className="mb-4">Price per Unit: ${selectedPost.price_per_unit}</p>
              <form onSubmit={handlePurchase}>
                <label className="block text-gray-700 font-semibold mb-2">Enter Units:</label>
                <input
                  type="number"
                  value={purchaseUnits}
                  onChange={(e) => setPurchaseUnits(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none mb-4"
                  min="1"
                  required
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
                  >
                    Confirm Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;

















// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { useSelector } from "react-redux";
// import api from "./api";

// const Marketplace = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState({ lat: 24.8607, lng: 67.0011 }); // Default to Karachi
//   const [radius, setRadius] = useState(10); // Radius in kilometers
//   const { userRole } = useSelector((state) => state.auth);

//   const mapContainerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const fetchFilteredPosts = async () => {
//     try {
//       const response = await api.getFilteredPosts({
//         location: selectedLocation,
//         radius,
//       });
//       setPosts(response.data.posts);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   useEffect(() => {
//     fetchFilteredPosts();
//   }, [selectedLocation, radius]);

//   const handleMapClick = (event) => {
//     const { latLng } = event;
//     setSelectedLocation({ lat: latLng.lat(), lng: latLng.lng() });
//   };

//   return (
//     <section className="marketplace bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-poppins font-bold mb-8">Marketplace</h2>

//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Filter by Location</h3>
//           <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={selectedLocation}
//               zoom={10}
//               onClick={handleMapClick}
//             >
//               <Marker position={selectedLocation} />
//             </GoogleMap>
//           </LoadScript>

//           <div className="mt-4">
//             <label className="block text-gray-700 font-semibold mb-2">Radius (km):</label>
//             <select
//               value={radius}
//               onChange={(e) => setRadius(parseInt(e.target.value))}
//               className="w-full px-4 py-2 rounded-lg border border-gray-300"
//             >
//               <option value={5}>5 km</option>
//               <option value={10}>10 km</option>
//               <option value={20}>20 km</option>
//               <option value={50}>50 km</option>
//             </select>
//           </div>
//         </div>

//         {posts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((post) => (
//               <div key={post.post_id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//                 <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
//                 <p className="text-sm mb-2">Units: {post.units}</p>
//                 <p className="text-sm mb-4">Price per Unit: ${post.price_per_unit}</p>
//                 {userRole !== "admin" && (
//                   <button
//                     className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
//                   >
//                     Buy
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No posts found for the selected location and radius.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Marketplace;
