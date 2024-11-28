import React, { useState } from 'react';

const Marketplace = () => {
  // Mock data for posts
  const [posts] = useState([
    { id: 1, title: 'Excess Solar for Sale', units: 50, price: 100 },
    { id: 2, title: 'Affordable Solar Units', units: 30, price: 60 },
    { id: 3, title: 'High-Quality Solar Units', units: 20, price: 80 },
  ]);

  const [selectedPost, setSelectedPost] = useState(null); // For the selected post
  const [purchaseUnits, setPurchaseUnits] = useState(''); // For the input field
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state

  // Handle opening the popup
  const openPopup = (post) => {
    setSelectedPost(post);
    setPurchaseUnits(''); // Reset input field
    setIsPopupOpen(true);
  };

  // Handle closing the popup
  const closePopup = () => {
    setSelectedPost(null);
    setPurchaseUnits('');
    setIsPopupOpen(false);
  };

  // Handle form submission
  const handlePurchase = (e) => {
    e.preventDefault();
    if (!purchaseUnits || isNaN(purchaseUnits) || purchaseUnits <= 0) {
      alert('Please enter a valid number of units.');
      return;
    }
    if (purchaseUnits > selectedPost.units) {
      alert('Requested units exceed available units.');
      return;
    }
    alert(
      `You have successfully requested ${purchaseUnits} unit(s) of solar power from the post: ${selectedPost.title}`
    );
    closePopup();
  };

  return (
    <section className="marketplace bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-8">Marketplace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm mb-1">Available Units: {post.units}</p>
              <p className="text-sm mb-4">Price per Unit: ${post.price}</p>
              <button
                onClick={() => openPopup(post)}
                className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-600"
              >
                Buy
              </button>
            </div>
          ))}
        </div>

        {/* Popup Dialog */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-semibold mb-4">Buy Solar Units</h3>
              <p className="mb-2">Post: {selectedPost.title}</p>
              <p className="mb-2">Available Units: {selectedPost.units}</p>
              <p className="mb-4">Price per Unit: ${selectedPost.price}</p>
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