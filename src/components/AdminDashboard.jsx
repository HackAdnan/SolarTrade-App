import React, { useState } from 'react';

const AdminDashboard = () => {
  // Mock data for testing
  const [userDetails] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Admin',
  });

  // Mock data for approved posts (Admin View)
  const [approvedPosts, setApprovedPosts] = useState([
    { id: 1, title: 'Excess Solar for Sale', units: 50, price: 100, location: 'Karachi', status: 'pending' },
    { id: 2, title: 'Solar Units Available', units: 30, price: 60, location: 'Lahore', status: 'pending' },
  ]);

  // Technician list for assignment
  const technicians = [
    { id: 1, name: 'Technician A' },
    { id: 2, name: 'Technician B' },
    { id: 3, name: 'Technician C' },
  ];

  // Admin commission rate (fixed)
  const [commissionRate, setCommissionRate] = useState(0.1); // 10% commission

  const [formValues, setFormValues] = useState({
    title: '',
    units: '',
    price: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle assigning technician to the post
  const assignTechnician = (postId, technicianId) => {
    alert(`Technician ${technicians.find((t) => t.id === technicianId).name} assigned to Post ID: ${postId}`);
  };

  // Handle commission rate change
  const handleCommissionChange = (e) => {
    const newCommissionRate = parseFloat(e.target.value);
    if (newCommissionRate >= 0 && newCommissionRate <= 1) {
      setCommissionRate(newCommissionRate);
    } else {
      alert('Please enter a valid commission rate (0-1)');
    }
  };

  // Approve the post
  const approvePost = (postId) => {
    setApprovedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, status: 'approved' } : post
      )
    );
  };

  // Calculate commission for each transaction
  const calculateCommission = (price) => {
    return price * commissionRate;
  };

  return (
    <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Admin Details Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Welcome, {userDetails.name}!
          </h2>
          <p className="text-lg mb-2">Email: {userDetails.email}</p>
          <p className="text-lg mb-2">Role: {userDetails.role}</p>
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
              onChange={handleCommissionChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>

        {/* Approved Posts Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">Approved Posts</h2>
          {approvedPosts && approvedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {approvedPosts.map((post) => (
                <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm mb-2">Units: {post.units}</p>
                  <p className="text-sm mb-2">Price: ${post.price}</p>
                  <p className="text-sm mb-2">Location: {post.location}</p>
                  <p className="text-sm mb-2">Status: {post.status}</p>
                  <div className="mb-4">
                    <label htmlFor={`technician-${post.id}`} className="block text-gray-700 font-semibold mb-2">
                      Assign Technician
                    </label>
                    <select
                      id={`technician-${post.id}`}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      onChange={(e) => assignTechnician(post.id, e.target.value)}
                    >
                      <option value="">Select Technician</option>
                      {technicians.map((technician) => (
                        <option key={technician.id} value={technician.id}>
                          {technician.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {post.status === 'pending' && (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
                      onClick={() => approvePost(post.id)}
                    >
                      Approve
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
