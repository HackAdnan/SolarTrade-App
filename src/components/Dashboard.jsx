import React, { useState } from 'react';

const Dashboard = () => {
  // Mock data for testing
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    solarUnits: 120,
    role: 'User',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: 'Excess Solar for Sale', units: 50, price: 100 },
    { id: 2, title: 'Solar Units Available', units: 30, price: 60 },
  ]);

  const [formValues, setFormValues] = useState({
    title: '',
    units: '',
    price: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission to create a new post
  const createPost = (e) => {
    e.preventDefault();
    if (formValues.title && formValues.units && formValues.price) {
      const newPost = {
        id: posts.length + 1,
        ...formValues,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setFormValues({ title: '', units: '', price: '' });
    } else {
      alert('All fields are required!');
    }
  };

  // Handle deleting a post
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <section className="dashboard bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* User Details Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Welcome, {userDetails.name}!
          </h2>
          <p className="text-lg mb-2">Email: {userDetails.email}</p>
          <p className="text-lg mb-2">Solar Units: {userDetails.solarUnits}</p>
          <p className="text-lg">Role: {userDetails.role}</p>
        </div>

        {/* My Posts Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-poppins font-bold mb-4">My Posts</h2>
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm mb-2">Units: {post.units}</p>
                  <p className="text-sm mb-4">Price: ${post.price}</p>
                  <button
                    onClick={() => deletePost(post.id)}
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
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-poppins font-bold mb-4">Create Post</h2>
          <form onSubmit={createPost}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                required
              />
            </div>
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
            <button
              type="submit"
              className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
            >
              Post for Sale
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
