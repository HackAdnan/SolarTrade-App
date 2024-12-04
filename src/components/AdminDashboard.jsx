// import React, { useState, useEffect } from 'react';
// import api from './api';
// // // Before:
// // import { createRoot } from 'react-dom';

// // // After:
// // import { createRoot } from 'react-dom/client';


// const AdminDashboard = () => {
//   const [user, setUser] = useState(null);
//   const [approvedPosts, setApprovedPosts] = useState([]);
//   console.log()
//   const [commissionRate, setCommissionRate] = useState(0.1); // 10% commission
//   const [recurringPosts, setRecurringPosts] = useState([]);


//     const fetchUserData = async () => {
//       try {
//         const response = await api.dashboard();
//         setUser(response.data);
//       } catch (err) {
//         console.error('Failed to load user data:', err);
//       }
//     };

//     const loadTransactions = async () => {
//       try {
//         const response = await api.fetchTransactions();
//         console.log(response.data,"ab")
//         setApprovedPosts(response.data);
//         console.log(approvedPosts,'ab')

//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//       }
//     };

//     const loadRecurringPosts = async () => {
//       try {
//         const response = await api.fetchRecurringPosts();
//         setRecurringPosts(response.data);
//         console.log(recurringPosts)
//       } catch (error) {
//         console.error('Error fetching recurring posts:', error);
//       }
//     };

//     const assignTechnician = async (transaction_id, technicianId, postId) => {
//       console.log(technicianId,"tech")
//       console.log(transaction_id,"trans")
//       console.log(postId,"post")
//       try {
//         await api.assignTechnicianToPost({ transaction_id, technicianId });
//         alert(`Technician successfully assigned to Post ID: ${transaction_id}`);
//         setApprovedPosts((prevPosts) =>
//           prevPosts.filter((post) => post.id !== postId)
//         );
//         loadRecurringPosts(); // Refresh recurring posts
//       } catch (error) {
//         console.error('Error assigning technician:', error);
//       }
//     };

//     // const fetchTech = async () => {
//     //   try {
//     //     const response = await api.fetchTechniciansByLocation()
//     // }
//     const handleTechnicianDropdown = async (locationId, transaction_id) => {
//       try {
//         console.log(locationId, 'in method'); // Logs the `locationId` passed to the function to confirm the input value.

//         const response = await api.fetchTechniciansByLocation(locationId);
//         console.log(response.data, 'Fetched Technicians'); // Logs the list of technicians fetched from the API for the given `locationId`.

//         setApprovedPosts((prevPosts) =>
//           prevPosts.map((post) => {
//             const isTargetPost = post.id === postId;
//             console.log(post.id, isTargetPost ? 'Updating post' : 'Skipping post'); 
//             // Logs the `post.id` and whether this post matches the `postId` provided.

//             return isTargetPost
//               ? { ...post, technicians: response.data }
//               : post;
//           })
//         );
//         console.log('Updated posts with technicians'); // Confirms the state update is complete.
//       } catch (error) {
//         console.error('Error fetching technicians:', error); // Logs any errors encountered while fetching technicians.
//       }
//     };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setApprovedPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === name ? { ...post, [name]: value } : post
//       )
//     );
//   };

//   const handleCommissionChange = (e) => {
//     const newRate = parseFloat(e.target.value);
//     if (newRate >= 0 && newRate <= 1) {
//       setCommissionRate(newRate);
//     } else {
//       alert('Please enter a valid commission rate (0-1)');
//     }
//   };

//   // useEffect( async () => {
//   //   fetchUserData();
//   //   loadTransactions();
//   //   loadRecurringPosts();
//   //   await handleTechnicianDropdown(approvedPosts.loc_id, approvedPosts.post_id);
//   //   approvedPosts.forEach((post) => {
//   //     console.log(post.loc_id,"location")
//   //     console.log(post.tech_id,"tech")
//   //     if (post.loc_id && post.tech_id) {
//   //       handleTechnicianDropdown(post.loc_id, post.tech_id);
//   //     }
//   //   }
//   // )
//   // }, []);

//   useEffect(() => {
//     fetchUserData();
//     loadTransactions();
//     loadRecurringPosts();
//   }, []);

//   // useEffect(() => {
//   //   console.log('approvedPosts updated:', approvedPosts);
//   //   if (approvedPosts.length > 0) {
//   //     approvedPosts.forEach((post) => {
//   //       if (post.loc_id && post.tech_id) {
//   //         console.log(`Calling handleTechnicianDropdown for Post ID: ${post.tech_id}`);
//   //         handleTechnicianDropdown(post.loc_id, post.tech_id);
//   //       } else {
//   //         console.warn(`Missing loc_id or id for Post:`, post);
//   //       }
//   //     });
//   //   }
//   // }, [approvedPosts]);


//   // useEffect(() => {
//   //   approvedPosts.forEach((post) => {
//   //     if (post.loc_id && post.id) {
//   //       handleTechnicianDropdown(post.loc_id, post.id);
//   //     }
//   //   });
//   // }, [approvedPosts]); // Runs when approvedPosts is updated


//   return (

//     <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
//       <div className="container mx-auto px-6 max-w-screen-lg">
//         {/* User Details Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           {user ? (
//             <div>
//               <h2 className="text-2xl font-poppins font-bold mb-4">Welcome</h2>
//               <p className="text-lg">
//                 <strong>Name:</strong> {user.user_name}
//               </p>
//               <p className="text-lg">
//                 <strong>Email:</strong> {user.email}
//               </p>
//             </div>
//           ) : (
//             <p className="text-gray-600">Loading user details...</p>
//           )}
//         </div>

//         {/* Commission Rate Section */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-poppins font-bold mb-4">Commission Rate</h2>
//           <p className="text-lg mb-4">Admin Commission Rate: {commissionRate * 100}%</p>
//           <div>
//             <label htmlFor="commissionRate" className="block text-gray-700 font-semibold mb-2">
//               Set New Commission Rate (0-1)
//             </label>
//             <input
//               type="number"
//               id="commissionRate"
//               name="commissionRate"
//               value={commissionRate}
//               onChange={handleCommissionChange}
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
//               min="0"
//               max="1"
//               step="0.01"
//             />
//           </div>
//         </div>


//          {/* Approved Posts */}
//          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Approved Posts</h2>
//           {/* {approvedPosts.length > 0 ? (
//               approvedPosts.forEach((post) => {
//                 if (post.loc_id && post.tech_id) {
//                 console.log(`Calling handleTechnicianDropdown for Post ID: ${post.tech_id}`);
//                 handleTechnicianDropdown(post.loc_id, post.tech_id);
//             } else {
//           console.warn(`Missing loc_id or id for Post:`, post);
//         }
//       })):
//       console.log("null")} */}
//           {approvedPosts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {approvedPosts.map((post) => (
//                 <div key={post.transaction_id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold">Transaction ID: {post.transaction_id}</h3>
//                   <p className="text-sm mb-2">Post ID: {post.post_id}</p>
//                   <p className="text-sm mb-2">Seller's Mail: {post.s_mail}</p>
//                   <p className="text-sm mb-2">Buyer's Mail: {post.b_mail}</p>
//                   <p className="text-sm mb-2">Units : {post.units}</p>
//                   <p className="text-sm mb-2">Total Price: ${post.total}</p>
//                   <p className="text-sm mb-2">Location: {post.address}</p>
//                   <div className="mb-4">
//                     <label htmlFor={`technician-${post.transaction_id}`} className="block font-semibold mb-2">
//                       Select Technician
//                     </label>                  
//                     <select
//                       id={`technician-${post.transaction_id}`}
//                       className="w-full px-4 py-2 border rounded"
//                       onClick={(e) => handleTechnicianDropdown(post.loc_id, post.transaction_id)}
//                     >
//                       <option value="">Select Technician</option>
//                       {post.technicians?.map((tech) => (
//                         <option key={tech.id} value={tech.id}>
//                           {tech.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <button
//                     className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
//                     onClick={() =>
//                       assignTechnician(post.transaction_id, post.selectedTechnicianId, post.post_id)
//                     }
//                     disabled={!post.selectedTechnicianId}
//                   >
//                     Assign Technician
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No approved posts available.</p>
//           )}
//         </div>

//         {/* Recurring Posts */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Recurring Posts</h2>
//           {recurringPosts.length > 0 ? (
//             <ul>
//               {recurringPosts.map((post) => (
//                 <li key={post.id}>
//                   Transaction ID: {post.transaction_id}, 
//                   {/* Assigned Technician: {post.technician_name }*/}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No recurring posts available.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;
















import React, { useState, useEffect } from 'react';
import api from './api';
// // Before:
// import { createRoot } from 'react-dom';

// // After:
// import { createRoot } from 'react-dom/client';


const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [approvedPosts, setApprovedPosts] = useState([]);
  const [commissionRate, setCommissionRate] = useState(0.1); // 10% commission
  const [recurringPosts, setRecurringPosts] = useState([]);
  const [selectedTechnicians, setSelectedTechnicians] = useState({});


  const fetchUserData = async () => {
    try {
      const response = await api.dashboard();
      setUser(response.data);
    } catch (err) {
      console.error('Failed to load user data:', err);
    }
  };

  const loadTransactions = async () => {
    try {
      const response = await api.fetchTransactions();
      setApprovedPosts(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const loadRecurringPosts = async () => {
    try {
      const response = await api.fetchRecurringPosts();
      setRecurringPosts(response.data);
      console.log(recurringPosts)
    } catch (error) {
      console.error('Error fetching recurring posts:', error);
    }
  };

  const assignTechnician = async (transaction_id, technicianId, postId) => {
    console.log(transaction_id)
    console.log(technicianId)
    console.log(postId)
    try {
      await api.assignTechnicianToPost({ transaction_id, technicianId });
      alert(`Technician successfully assigned to Post ID: ${transaction_id}`);
      setApprovedPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== postId)
      );
      loadRecurringPosts(); // Refresh recurring posts
    } catch (error) {
      console.error('Error assigning technician:', error);
    }
  };

  const handleTechnicianDropdown = async (locationId, transactionId) => {
    try {
      const response = await api.fetchTechniciansByLocation(locationId);
      console.log(response)

      setApprovedPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.transaction_id === transactionId ? { ...post, technicians: response.data } : post
        )
      );
    } catch (error) {
      console.error('Error fetching technicians:', error);
    }
  };
  const handleTechnicianSelection = (e, transactionId) => {
    const selectedTechnicianId = e.target.value;
    setSelectedTechnicians((prevState) => ({
      ...prevState,
      [transactionId]: selectedTechnicianId,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApprovedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === name ? { ...post, [name]: value } : post
      )
    );
  };


  const handleCommissionChange = (e) => {
    const newRate = parseFloat(e.target.value);
    if (newRate >= 0 && newRate <= 1) {
      setCommissionRate(newRate);
    } else {
      alert('Please enter a valid commission rate (0-1)');
    }
  };

  useEffect(() => {
    fetchUserData();
    loadTransactions();
    loadRecurringPosts();
  }, []);

  return (

    <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-screen-lg">
        {/* User Details Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          {user ? (
            <div>
              <h2 className="text-2xl font-poppins font-bold mb-4">Welcome</h2>
              <p className="text-lg">
                <strong>Name:</strong> {user.user_name}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">Loading user details...</p>
          )}
        </div>

        {/* Commission Rate Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">Commission Rate</h2>
          <p className="text-lg mb-4">Admin Commission Rate: {commissionRate * 100}%</p>
          <div>
            <label htmlFor="commissionRate" className="block text-gray-700 font-semibold mb-2">
              Set New Commission Rate (0-1)
            </label>
            <input
              type="number"
              id="commissionRate"
              name="commissionRate"
              value={commissionRate}
              onClick={handleCommissionChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>


        {/* Approved Posts */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Approved Posts</h2>
          {approvedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {approvedPosts.map((post) => (
                <div key={post.transaction_id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Transaction ID: {post.transaction_id}</h3>
                  <p className="text-sm mb-2">Post ID: {post.post_id}</p>
                  <p className="text-sm mb-2">Seller's Mail: {post.s_mail}</p>
                  <p className="text-sm mb-2">Buyer's Mail: {post.b_mail}</p>
                  <p className="text-sm mb-2">Units : {post.units}</p>
                  <p className="text-sm mb-2">Total Price: ${post.total}</p>
                  <p className="text-sm mb-2">Location: {post.address}</p>
                  <div className="mb-4">
                    <label htmlFor={`technician-${post.transaction_id}`} className="block font-semibold mb-2">
                      Select Technician
                    </label>
                    <select
                      id={`technician-${post.id}`}
                      className="w-full px-4 py-2 border rounded"
                      onChange={(e) => handleTechnicianSelection(e, post.transaction_id)}
                      onClick={(e) => handleTechnicianDropdown(post.loc_id, post.transaction_id)}
                    >
                      <option value="">Select Technician</option>
                      {post.technicians?.map((tech) => (
                        <option key={tech.tech_id} value={tech.tech_id}>
                          {tech.tech_name}
                        </option>
                      ))}
                    </select>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                      onClick={() =>
                        assignTechnician(post.transaction_id, selectedTechnicians[post.transaction_id], post.post_id)
                      }
                      disabled={!selectedTechnicians[post.transaction_id]} // Disable button if no technician is selected

                    // disabled={!post.selectedTechnicianId}
                    >
                      Assign Technician
                    </button>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No approved posts available.</p>
          )}
        </div>

        {/* Recurring Posts */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Recurring Posts</h2>
          {recurringPosts.length > 0 ? (
            <ul>
              {recurringPosts.map((post) => (
                <li key={post.id}>
                  Transaction ID: {post.transaction_id},
                  {/* Assigned Technician: {post.technician_name }*/}
                </li>
              ))}
            </ul>
          ) : (
            <p>No recurring posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

