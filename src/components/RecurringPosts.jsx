import React, { useState, useEffect } from 'react';
import api from './api'; // Assuming you have an API utility

const RecurringPosts = () => {
  const [recurringPosts, setRecurringPosts] = useState([]);

  const loadRecurringPosts = async () => {
    try {
      const response = await api.fetchRecurringPosts();
      setRecurringPosts(response.data);
    } catch (error) {
      console.error('Error fetching recurring posts:', error);
    }
  };
  

  useEffect(() => {
    loadRecurringPosts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen p-6">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recurring Posts</h2>
        {recurringPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recurringPosts.map((post) => (
                <div key={post.transaction_id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Transaction ID: {post.transaction_id}</h3>
                  <p className="text-sm mb-2">Post ID: {post.post_id}</p>
                  <p className="text-sm mb-2">Seller's Mail: {post.s_mail}</p>
                  <p className="text-sm mb-2">Buyer's Mail: {post.b_mail}</p>
                  <p className="text-sm mb-2">Units : {post.units}</p>
                  <p className="text-sm mb-2">Total Price: ${post.total}</p>
                  <p className="text-sm mb-2">Location: {post.address}</p>
                </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-800">No recurring posts available.</p>
        )}
      </div>
    </div>
  );
};

export default RecurringPosts;