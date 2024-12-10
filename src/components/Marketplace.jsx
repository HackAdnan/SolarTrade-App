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
                 <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFhUXFxgZFRUVFRgVGBgZGBUXFxkYFhkfHSggGB0lHxgXITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OGxAQGzcmICYtLS03LSsvLS8tLzUtLS0tLS8tLS0wLSsrLS0tLS0tNS0tLS0tLS0tLS8tLS0tLy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABGEAACAQIEBAQDBAgFAgQHAQABAhEDIQAEEjEFIkFREzJhcQaBkUJSobEUIzNicsHR8AeCkuHxY6IWJEOyRFNzg7PC4hX/xAAbAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADQRAAEDAgMFBgYBBQEAAAAAAAEAAhEDIQQSMQVBcaHwEyJRYYHRFDKRscHhQhUjM3LxBv/aAAwDAQACEQMRAD8Ahx0Ydhce1XkEyMdpxIBjoxFFHpx2nEkYWMBRR6cdpxJGFjEUTAuO04fGFjEUUenCFcSxjoxFFFpx2nEunC6cRBQ6cJpxNpx2nEUUBXHacTacJpxEFFpwmnEunHacRRRacKExMEw8JgSiAoNGF8PBATD1p4Epg1C+HhfDwT4eF8PAlHKhtGO0YJ0YQpiSpCG0Y7RgjTjtODKBCg0YcFxJpw4raYtthX1GsEuMDzRYxzzDRJ8lDpwunEbZynOlW1sSVCoC8ECSGKghYF7/AM8TNRzDLqSjoUqT4mYcU1BmIIAJUxfmiLdbY51ba+FpmA7MfBt/1zXSo7HxVS5blHi63LXkmaMLptqkBRuxIAHS5NsT0sh4gf8A81ZArEUEMkbaDUAcEsfulTAPYnEFPJKpB8JQQ0o1ep4jqY3QktAgbAjb3OOViv8A0TqZhlOP9vb9rr4T/wA22pd9Sf8AX3/ShoZhHjQTU1TpNJS6tp3h7IO3MwvgbNcQdCAMsDaSHrEOJ6MEUqDEGxO+DczmQASXa9opjQt9pN2Un0IsBG8nGZriVTUQtWkoBImq13gmWHcdJ7qcco7WxuIMB0cLcxBXW/o+AwzZc2eN+RkLYhcKFxIFwoXHv18+TIxwXEunC6cCVIUWnHacS6cLpxJUhRacdpxMFwoXAlGFDpwunEunC6cSVIUOnHacTacJGJKkKKMdGJIx2nElBRxhIxJGO04kqQo4w2MTacJpwZQhRacKFxJpw8JgEogJipiRaeJFTEyJhC5WNaoVp4lWjgulQnEyUCfbFDqoGq0MpE6IN8tfDTQjFg1WlbnkxsssTfTMC8TF9r4bUy9ZgfDotAEl6hFNRfmNxJje4AtjE/aVFn8p4XW9mzKz90cbKsanhhT84+Z6Yfn6PV8wqLfloprY3kHW3KRAkiBvuRvV5ivQk/qnqk6v29QleYAEeGLRHY2B9cUu2nVdalSPF1uStbsqk29WqODRPNTVM7SDaNYZpgqnORYnm0zFhMb/ACxLRo5irHhZZ4OmGrMKQbUY0hQGYHrBA7Yr24xWiE0Ux2poF2Hcy4tBsbAAYKWq2Xpiu7s2ZqqfALks1Kk1mrmbhm8qekm+Mz6mNqfNUDfJo/Oq0soYOnowu83H8CyTMUwjkV80i6WYaKFPUbCLudQ1KZJBMTFrXBrZjLSD4D1mgc2ZqTf7MJdQTudLAflgOhQdzCIznaFBb5GB8zI3tiY8PYed6dPuHca79Si6mlv4dsV/CUiZqEuPmVd8VUaIpgNHkFNV4/X8qlaY3ikgXrdgTzzNhDeuACalVwDqeoxCqGJZiSRpQEw3Yn13xNFBTBqO5k2poEWQN5c+VRH2PrtifM5laNFPCTwszmNS5d3dmalREirmGsqqTJVbAzJBgDFznU6DCWtgcIVIFSs8AmSfVOQl6n6PSZzRoN+uan/8RmbapciPDp+UTEkdZwfUTTcqi/xnxGJnqvckbg/U7RcNyaUqS0kWqVURAXQPUkGNRN5PreBv2eq+GByooHUEsQDYsGIEAbe0xEY8liKxrVC8r1+GoCjTDVSfE/ESFjXq1yFaAAoEFnUC8C0bmYvjEVaYcyRsAACQYAFh/frg7jddncPEI37OeigyB6TOqPbtiCmBH+4GNlNnZMjesjnis4u3aDrzXq2nChcSBcLpx9DlfNITNOO04kC4dpwMyMKLThQuJNOHacDMpCi04XTiXThdOFzKQodOO04l047TiZlIURXCacS6cdpwcykKHTjtGJ9GFCYmZSEPpwmnBBTHaMTOoGqDRjtGErZumnmdRad5O07C5sCYjphadVnEpScj7zDQouBLaoPWdum+MVXaWGpfM8cBf7LdR2ZiqvysMeJsOacExIlPAubLIFNSslMOpKrSHiuRcatRld9iQBY/IJs3QM/q6lUzvWe24I5BIMQB0gWtfGR21Xv/AMVMnzPdHuVtZshrf81QDyb3j7BWTZymPtAk7KLsd45Rfofpgih4rkClQcj7zxTUmAQok6gTIvp6Ee1MvFqoEJopKNgigCN/MZI+X9MWis9EAuxNdh9okmkjDa+zsP8ASp7tbO+tjH6uDfJonmVsZhsHT0aXf7H8BHLQcmGr00N+WkviEQR9o8s79PyuZTyFGpysjv61WlWvI1KLTYCe1sC5Gg8gkaQerAKPxti94SFBAkE+gP57YzvoN1cS7iZWltYgQwBvAQjeH8LZVgKqATARQouZt1/5wJxhfDXQsknznv1gnsN46nGnNdVWSYtjL8az4menRl/ruDgMF7BISTqVl85w9yZgkHr0HudsUtfJgHmqU132JqG3cKCPqRJxfcRcNpmSfViT8p/DFTRyJrVRTWxMksfKir5nYmOVRPW5xsExJVLtV3Dsjl9L16niPSpQIOlRUqG60QOYmd2MiBiv4jxp6rtUKUlZjJbT4kQItrLAKosAALjFjxdHraUoo4y9IEUiw0zPnqszQNTkd7DtGKoZAA81WkvSAxqkEdORWgDcy2++C0bzqkJnRC5nOValnd2FuXUdN9l0jlHc2GBlA6et9/QtAn2FsHsMuN2q1LdAlOAdzcu0ttsLYcuZEhUy9OSQoD6qpLGyoodgO08v8jhgY3JSJUPDqFIl3qnTQpJrrkdE+zTUT53MAW6+hwTwpalSo+braKdSoAFTzeDSAAp0UW0ACJjc/ULxKocxUGUnxKWWbVmGQIqVcz9zlABp0ttrmSfW1p0WFgiJHUmSPUHr0t16xtjzu1MXnd2YNl6HZWEyjtXDgo3qAgktUcQTy8qwBfS1h3sWN+5xnOI/ragopZHGupHRIsJ6lrT1tPXFrxriGhC5qa1EagoABkwoXclp3vF9rYH4Jkiil3/aVDrf0JvpHoNsZMHRzuzHQdclp2jiezZkGp+37VV8QcN1UyALrdfl0+lsZmk9t/x/2x6RXoSMefcVoGjVZQDBOpYnY9PrON9Zi52CqTLSvWAMLpw+Mdpx7aV4VNC4WMPC4ULgSjCZGFjEgXC6cCUYUenC6cSacLpwJUhR6cdpxKFwun5AAkkmAALkk9BhS6LohpJgKHRhGAG+KfNcSuf16gdBRpF26wSzwp6HbvvvganmhUYIlN6jGY8WqdOzEkosKIBJJJsBPScc92OqH/HTPF3dHvyXUbsxgjtKgHk3vH25q6r52khhnUHtu3fyiTO9o6HDP0h2EpSeL87gU0G921EHp26jFRnuLlAKdHQoE6npoE1sbnQY1BQZg+YySYmFrQK1c2FSof8AM5Hb+/8AnFDquMqauDR5CTz9lqbhsHT/AIlx8zA5e60NTOksB4tNSTASmGrsSSBYiFLbgCN432wPnsxRpE02NTMN9vU4RA0AEEIIePSwOxsMD08qcuplkWsRBJYE0gZGkKssKhEgmOUWFy2kApRG7M38ICj/AFGTHun+9Bwrah/uOLuJP4haW4g0x/aaG8APuUU3G3Fqa06Q/cQdSSbtMG5No3PviXKI7/rq5eoJOimSzNVYbgdfDWeYjuFFzbuHpTvVamq0lMFm53dtxTTUdBY7k6eUDUekwZ/i1WoSNRVdlpJyU1XoqptA+pJPUmLm0mM7rGgKp1R77vcSnZnL1ncvV0qxufEZUsBYBNwAAAABAAttdUpUhvULelND+bFSO2x/PAVMdBuegue+x+tvfti94XwYgGtXRlpIJCP+qNVosgLxpHVmmwtucO6wug1EZQUqKCuacu0GgHYuTB/aso0gpMgAg6jfYYZSzdZiSJEkklREk7ksAGPeTPfthK3Oxq1aqaj0QFgABACgcoAEAANYepwZw96f77epIUfKNXX97p6YTdpKYaqXL0ma8gkbmZ+v9Mabh4AU1As3gAX1t6x0G5PywBloa4CoFEu8aoUdi0yTsB1OAs5xXxahNwq2CzIAHQ9Ce56nCGXWTggK7zGYdjDECZBlhNwegk/hio8RU8zlv3QsT/qI/LbAf6WZHNsf977/ADwHm6vORJJmw9+m/X22wwpqFwRWarp5kpyezMxPaAo0gzsN8JxnPNlqYoKVWq0Gu1NQhUHy0FKgSepM/XE3DctUpUzmikvcUFaFGrrWfVpAVek7n64z9fLySz1qYJuxDGoxk3bkU8x9/wCuGEE8FWSUBWqsxkksZnUeb3aTNhsL7/TEBv0tYQeY+ixe53P9jFg6UF3ao5nYKlMGBtLljA9sRNm0Hloqd4aq1SpbqxEosnpbFk3sq9yCLXF7z7Cepidl9sFGs2WpK6cuYrlqeUDHToEEVcywIGwkLY37wMGZDOOdTNUFChTU1KzUVSmUpj7KlFks0wBO5HriHhYrZms+erUwHqwtJWJPhUF/Z043kxJM+vpjBj8X2NON566/a24HCmvU8gpeFZRKVJaas7aVHkBBN5LGBzSbzfe3U4IzBWmpY0ZA6uQR/lW5tuVtseuCS7DzVUUDoAJE7GT0/wAsnpGKLjecZSopsWZyUp6jPMd3A2CxeAIsvc48sA57o3leqcW02SdAgssDmcwzEzSptqvs1WIn10j8TjR0lwLwrIrSprTXZRv3PU/M4saa49BRpCmwNC8riKxq1C4pj07Yqc1kwWmB9MX2mbY0y/A+pVJqFW084ieaSbewgfLDuCqbKo4wunDgMOAx6mV5mE0DC6cSBcLpwJTQmBcKFxIFwoXCyjCjjChcSacLG5JAAEkmwAG5JwC6EQJ0UZAAJJAAEkkwABuSegxnON5qpV5EVlo/eeKYqRsZaBHZZ9T0iPi/HXc6aLMiDqCVZ/U/u9l+Z9KmhlqlVoQF2J+yC2/3u3ufnAxmfUJPgF0KNANEnVT0cgGYJrUsdlSXbqd7JFpJ1QBfYYLrZqjSVqVIM8n9ZVnR4gBBChIJFOR0YFjBNgAOrZcUlairoCRFaoXEt+4qAl1QEfdliJ2gAHRSG7s3fQlultTFWH+k/wAjVOY+IWjRIM6AOVKajuED/i8kfIxixzWaegoNR2Nc3VWYkUAdie1Q7j7tjZoCqHpZZVqeFNcw1NajGpoXcPUChbmQVUg9GP2Q1UOJVGJZSASbsigNe/7Qc5Jnck7/ADKuvoEwTaWUqOJCMV+9EL685t9SPXsDMlwjVqZ6tNEQTUYN4hCzpgaAys5MgKSCTPSYgyuXeu92kgFmqOxIRRcszDmAAj12AuVGH53Ma4o0Q3hqbACXdvKajgGdRFo+yOUfaOAZ0UEIjiGboOQF8Xw0BFNRppqBuSzc+pmN2bSJ9gowP+mIPLRQdObVV9NiSn/b6d8MPCqou6lPWqy0vxcofz79hgjh/BvFqBBWpTBkgO4QKOZncJpVQNzrttucDuxqjJlEcNqVKpbVVanRQBqrU4UAGwCqkBnY2URcydhgfiWeNVhChEQaadMX0LMxNiSTct9ppOwwZns1lyi0qfjNTS/2KeuofNVYnW1xYDSNK23NwjmUFhSTr52aoR7qWVZ2+x2GICJ0R3KelcL3IjsbdBse5/HrixyHD8wzDRTaW21DSCI7tp6CbbAYAo8UqrYNpB+ygWn6TChJ/mbdMXGZqLlkNMz49Rf1xMzTQ3FLV95t3M2274BJCYBWWbzSACmlVCi8xZdTs7bF4UEAC4UT698Uoq0V61H/ANKWHzcmD9TitqZubA29Lk9o80T0Ha+Imr+v9LWkAnboLb4DWkKFytameUWFOmOnOWc/9xC23PLgzIVHqszPUanRRQ9Zk/VwtoUaQBrciAJxS5XJ1qpApUmaSBZWKyTaSAAFG5JO/wBcWnG6ZpquVR6QpodT1HqoPGrRzOVlm0qLCR06zOIY0UnegOMcUbMVC5FrKiC+hPsIIB9yf+MVlZja/wAyfq1zsNhb27YK8CnEtmNUDenTqVLHc8+gSfyPXfDXqZdT5ar7CDUSkCeiaUVmMe+HaYsAkN9UHeOwjpPl6XgCW39vTDQJYDdiQAoiWbogADG399MHfpYElKFIXkMyvVuLlyajaYHtH44JrcdzGXy+umf11cmjkqSBEBPlqV2VABpTYTIntE4V9bK0uKZrMxACr+JBXqDIioPDoOtTOMGLGtmL6aC9WVOwmWmwJGLpgh+zUqT3DaSexWy9txA63wPwThzZeloRBO7u7GXY+ZzAJM+sHpaMWFUVBJaoq2vCTb0BbfsLgdZx4/FYg1qhdK9dhMMKNPLv3oLM5gU4HhhJnSxI1C0kiJgEA80zY22xmOH5lTVasQ+jy0bSFSbnTuJ9toGCeMO9Zxl5J1QzsYkUlNha0kjTbsTF8OqwrlY5RAAHaBsMbMDQMdoVz9p4mT2Q9fZXGTzKP5GDegN/mNxiwQYzRpU33A9+3z6fLFx8NIzUKayzMTAkliTqgXN8dMea4pWv+D+G+JV8RvLT/Fun03+mN1OKh6tPIZUM4YqmnWUXUSWYKWjciT9BiGh8XZFxqGapD0dhTYe6tBH0wjnwrGtssoEw4JiWMKBj02ZeahMC4ULh0YdpwJRhMjCxh4XDgn4Ak2JsNza+FLgLlMGkmAojABJIAAkk7ADcnGV4zxtKvIqNoHQuBrPRnTTqjsNXrhePZypWOgaadMHyu6BmP3nSdXsItisy+TViEDl2Ywq00Lkk+tTR9f5Yoc8O4LdSo5NdV1B2dglOmmomwCBzPc+JqI956SYGCs5nGCGitRqk2q1NRdT/ANNATZPX7X8IGHVq9GiGpUwahIh6peJ7okAEpO51c0dViQv0uNlQeyBjv0NTUfof9q4JvCvkC0qGhlWcwqlvRQXj/wDYfT+mLjLcOFBfFq+GKn/o0qrrbqKtRGIYpvCwdR/dB1RippQVcwS8/sqLsSr9NTqTApiDYRqII8oY4rK9V6jF2JZmMljN/wAx8rRHSOWHM7giICkr01Zi9XMamJJJVGcybk6qnh+vU4ky1CmzhKdKpUY2Gtwg6kkgLIESSTU2BJO5I1Ci7HSilj0C3npsv9P/AObjOcNq5dDRVQrMIr1WZKY7+FTYskrYajsxgDlW6uyi0qCTuUGc4mtMeDQWnp5fEcIaoqspJDA1PEIQTyzf7W7AAB+J1WGnxahH3QxA3+4rR6Rp9PvY79BG5r0R7Mah2ndEb6z69oa9KgPNUqN6CkFHb7dSd4Hl9BecLZNdQ0aRZwiLLuQFCgamJNgPLJP9T0GLPiNdaKHLUm1Ex+kVVBIdgbUkkGaSHrPO0nYYKqVaWRGlaTnMuhWoHf8AYKwnTNNFiqy+aDKrABvipp8QIMilRU//AE1Y2EbuajD5bAxucGSVLBR0abPYAsbQBzHe1uab+0mTsBg5eG1gOamUH75WkPlrZfly9zhlTidYiGquBtBYqvzUFQPWB6YL4LkkfXWqz4NKPEKwGdj5aSQCdTdYPKuBJCMBWXDMomVAzFR6YdgTlgoNUSLGqwVQCqfZBsT1tirbwJJY1XYmTq8OkSTdpJLtfcmMR8Sz7VqhqPpB6LYKirZVUE2Vdha574gE9B6dfeDAHub+lsAA6komEb+k0/s0QR3dqrm/pKLJ9tsNHE6gsjIlt6SU0IAtMopYxsL79cAsf7OkG/vqMt27Yu+CZKzZmsmqjSI00xqPjVfs0wLAou59O84hyge6gkqatmXy1GXdjma6WLMzGhQO5OsiKlT6x2nGbVB0HppX8F5V67m/9ME8Uz0u1WvVph3OpmapSWTtESTCxEekXxVZj4hyaiDmFbtpWq5vubhRJ9xhW1mNGv0/SJpuJ0RrAz0n1i56tzHZRtA/mMNWdlMWNrmF6tCiNR239O2KSt8YZVbKlV/YJSgDpPMfywPn/jQamWlQV0BkPUeoZGwOkaQovtGAcSwf894R7F3X6la/h+SV2Os+HSVTUrOVX9XSW53JMm3QySPXCcM15msc658FGUU8pR5P1dBfKBIPMbMY+cgwMzwvOZvOs2WrL4WXbRUrrTospcKSUUtBcyTO/QkY3tGmqjSlAi0RpRZA2G8H0UxHWMcXaWMz9xvXX2Xa2Zg4PaO9EmulMeK7CJhXcxO0lbgW8zfLtiu4xmaKU3IXRoEmV0kGJUKOgMiw3Jg9cWtfN1EUnQBpvd9UnsIF2i8bW364yFfNJmM4lIEsEU1HMyGYEaQ3fSWn3J7Y5VCkarw0LqYmsKNMuPRVjwXLMAatQfrah1P+6PsoPRRb3nCZhlNVlBE2lZv5RuBf64taS4yXxTkEesSReFg9do3x6WnSnutXkalW+Z29XiUx/f8AcDGz/wAKuH6kNU+Wm7qv8Wo/kPzGPFqmezWXutUlYkK8OIB0xcTv649+/wAJKJHDadRiNVV6lRo2BZyAB8gD88VuMOyq1rZbm3LT8Vy6VKTo4BUxIJIFmB3F+nTGRrfB+WJmXX0LD8AVJA9zjXcWzqUKNStUJCU0LuQCSFUSTABOM5lvi3h1RdS5zLwe7op+Ychp9ximpmmydsHVA6cdpxLGFIx6XMvNwoguHBcPjDatRUUs7BVFyx2H9T6dcAuhMGkmAm1GVQWYhVAkk7AYxHHuMnMHQoIpA2W0sfvOPyHT6kkcb40leBpqaBcKWVQT95oVpO/W31Jr6FUsQlKipZjABBqE/wCpmX8APkMVFzjeFtpUms1N0Hl6DOwpoupmMKoEkk9gcW9bL1KaNTpoTqEVaxGlSOtOmWto7tPP/D5m5vijIho0qkk/tKlMBQSL6KeiIQdWiWP7u9QxvJ36ljf+R/v6Jd11fYWRQyv3qtIezGp17IHH5bfQ/K5SjTVa1RmcE8lILo8SJBbzToBEE6RNwNjpHyeVRU8asJSSES4NVhFpiQgtqYHsov5Rq+ZqVmLG5NoUWAAgKqiQFAsABER84e9vUFkXmc8rOXNOWPWo57AAQopgAWAA2gAdMRHOPuq019VpqT/qYOfx/lMBosNwF38xCbX6lfX8fWX5fjWUy6+KcxRNeSKYnWKUf+rZWl/ujYGWN4GK3PpNGqcMedytM1n6mXUo1VzXcEMNZigrC6BdUCqRuQOQGPMTjPFI2WPlHp2H5+nc4Az3xDlqbEGq7kEzoVmv15iygz3vvPWwH/imlMU6FVydp0L02gKx6d9hhBXptGvJN2TydFdMxPUfXV69z7zHr0GL3IURlKaZho8dxOWQiyDb9IdSBPZA255sZGjxjNVApo5IkyJ8QO6wRqXqAQYMgiLDBj1OM16vjPSpyxVmBSmpIg2JMsAANMdJgRih+PpixPMK9mCqu0HIokgsZu7EmT5ySTf7xYz9T6DElTLuBzAqO7nQBHqzKP6m/TFfT+FeJ1QPFzbKDplfEYwD5lhbWHTbDqf+Gq71cyZi8LtzWuTtp/E4zu2rSFgRzK0N2XWN4PIKepmKFPSalejTBAIIYOY1ESBTUzBB6iSDifivxjkX00qVR/BoqxpjRdjEu7F2E1HNgIMWAw6l8D5BTDO7xqABcWnpYbjp3J67Ys8n8O5JPJltR5SCVJuogeY29up7nGV+1hun6e8rSzZLt5H19oWLf40pj9nQqGOpdU22sq2A7SffCDjefqnTSyagyEk03eCRqAOskC17jHotLLKnkoIoAKiAosTMCAbTcjve+CCah+6PS7R+U/3vjO7arzoOfstDdksGp5e688oUuNOG5CoZTEaKJUhhcRpOq1gehw0/Aeeqma2YBPLdnd7HzfToOv449C1x5qsbn7I995tt/M4CzHFMok68ysdmq7j2B5vnJ+WKPjKzvlH0Eq74Ggz5j9TCzdL/AA4QBRWzLMisYUAKNJ6AknSZiTcYMy3wPw9IDFnK6g0vvN5KrcEDaIHU4Lq/FfD0mHDGR5VZz8jGwn5dMCt8d5dRFOjUaDFkCCN5Ex9MDNineP2RjBs8PurGhwLIL5MqGGnSSULArvMtZibcwknpbFjTpKvky4UaQswiyq+Vbbx0UwBfGTPxzUYgU8vct9uoBIvG0wdr3xUV/j3N7aKaQxkGW2JGki23pG2AMNWdrzKPxeHb8vIL0ZTWN4QDpLEn8hH8V/a+HLTqb61HaE/qfL9DYXGPLKnxZnXH7YC+oaUjva+4vsbYHPGsw0ipWd5kgEhYYzDWHQ4b4J28hA48bmnkFtuOcSZCVUmoW5aUwAHO9gPL1vJgb4k4TkVpIFFz1bqxNyT88VHAtVZ/0hxEDTTHY/bb5m3yONJRGOhgsP2bJOpXI2hiu1qQ3QIhBjMfEyVRV1KmpNAvteTN9u2NQuJ8tRLsqASWIAHucbri4MLnWOolYWlkmqKmulUCl/NpkR1uLbhfocex/BOYFGlTywIiYWJiDqax62BGKvjlPL0FqBUIqU4GoGNdgZ9+ZTHY4zXDOJFfDdXYE32EwRp+ulmE+uPO4nGP7fMDYLSHhrcgC9L+Ls2jZatSJH6yjVQXiSyQsH3x801+ArPMzKYFtIOPWvibjYeroT7KC5iFLcyx3sw9trYra1Kk0EqotYFQSLk3n1nBdtB7XklQOAMFbsDCgY7EWZrhFJPyHc9se2e9rGlzjAC4FOm57g1oklOr1lpqXdgqruT+Q7k9BjD8a4rUzDWVhTW6rf8A1ORIJ/AbDqTN8QPma66UqJSvOoktpEfYFhPqcZkfBKtBr5utVM7CY6SBM+v1Hz439bo3IHXp7r0NPYVZsTr1boKepVVSdVSmpFyGqICB3IkH8MNq/E+SpUylOsGYr+tdUaSCQDSpyBy7SZ5v4RefKfBeSWP1Lt6sxvEbiQOnb7R+VpQ4Jl0jRlqSxsSATaL7G9h13n55qm250HXqSttPYjhqRz9gsY3xRTb9nRr1D7BR3/f7HE9LO55wfDyBFrFy+8wZuojlbpvp9MbrUE3ZEHb6+o7H6YGq8Uor5q6/5SD27A9wfmemMztq132aPv8AiFoGyqLLvd9vzKzT5XjNUy7UV5QiwKY0KCsaYU2ALW/i6m6p8FZup+3z7xFwC5Gx7sBHl+pxa1PiTKAxrZydgJ9YAkgTIj/MOmL2gSVDeEEkTDkawIHmABg7jfoPbGepisRHet6e6vp4TCzDTPr7LK0P8PsoplsxVJHUMFPQe/3vr6YKpfB2QQ2os155i5jmn0nt7fjpHqt+6o6C5+u3t/cYgeoQYNQDvYd/U7/3bGY4iqdXHrgtTcLRH8R9EBQ4JlqcCnlUERBKqTaYuSe5v19bYNo5fSYVEUAAAC0QIGw2F7fljgyk+diegHT6C/f2xItJOiuffV/M/wB/nW4k6q9rWj5QnEP1ZRtFv6n+/Xqmsf8Azf8ATp/ofnjgnakPc6R6fIf3GJNT9FUD+In8h/f5LCKhOj/qN/r+V/5/j1w4KOlI26nSPpJsfp1+chLj7Sj/ACz+Z/v8cD1s3TX9pmFX/Mi+vv8A388MATp+UrnBuqIRXHRF+ZMd4ED26R+By3xt8R1cqFWnUXxDzMvh6tKGwJM2kwBPr6YPz/HqCJNOoa7sdNNEckM0dWWygC57AG04yHHQUo1PFYPVqAM5AsvVKaDoJE+gDHcidNCnDxmHp1u/KyV6wc0hh9R+t/4QD/FOcffMMPRVRfodM4hbP1n81asev7Rh+AgYzmoyN98amihgY6jqYZoOS5Hbh2sniSh/0YNupPvJ/PElLKqNlA+QwatI9sKaBwkOO9IajRoAh9A7YQqME/o5w+jkizBZAkxJMAep9MDs95Q7c7kEDBBAFr/TEefrJUcmAC0kpEQZvHcdfnizbhrAwRG9zYGATY9f+MJmOCoxALG5iQBIlQQRfYk/QYYFrdUhqEmVULTAFhi7+HU81uo/niHOcJbL+GrMWDMVLkqAGiV+UWm9+2LbheUZCwIjb1GxNjsdxcWxZSLXEEFV1HGIKtaRwZTOBUGJ6ZxtAWQlFIca/wCC8jGvMuLIDokdYlmHsPzxlOH5dqjrTXzMYA9cbvi+eGRoUdHMqPoqD3VwSe0tfFOJqimySmpi8rDfHGYHjkiDTKg73CsGZxPZTt2vtjKFSEhJKi6tJtuPwMe49sGcSrmpVMSJLCmCFPKCzXWdo0j+4xV1q4ogU12JJPWx3X26jHmxLj5m/kmJukzztUcAcrFWBMSBAsfUi18WicXdLKAR6rq/HFFxLOMqOVW7eUjpp3IPTcmfywHw+sWpqSrNbddIFrRc+mLxSJaHeCWV6gPjKglPVVlX5uQA3hoEf33xQcR+LaDtJFRuwAIFjbcx0H1xlc8X5ToJANiZYGwsehBAFvTE1HIpDOSgC01dQdRVyIDU2HmVje4tY7dOhXruxLQHmw9LqzCVW4VxLG38dVdVviTTGiiL7FiAPqJ9cAP8T5k7JTH1Pb/f64ZxTPZdmmimkBRKIDBJudMsT177LisbhLKfFneAEmTzDVqsIi0YyspMkiBx8V0G7Qqv1J9ICNqcazZt4oX+FQP54Dq5mq3nrue4m2xG0dicIKJOHU8oSY2HUxMDvjQKcfoBK6uTqT6kodqQMsS7dCSTvvcz7nHJlFYgBLm6z89vnbGlyvDwygOBI0wrGNUAgTa0Wtfc9Tic8OAQ2RgBCtpBCxAkfPrH44zOxTRYz9UmYIfg2Wy+WirVdfE+yqkQltydp6TIA9cWVX4lyQ81cMdyFZnm23qOl9/TYA5/hVJUNT7Cq2syLgkoVJ7QZttBxQ5DgqlCsAtyhWN97z5hFgL9Z9cBjadRuck6wtTMa5gygDmtFU+L8ipkBmImCKbHtsT3/lgd/jqgvkoVD68i+3XFPS4Wi0iGKsZMHSegiSZFgSY0m+lh7539Fc9Di+nhqTpgaeJRdj6vj9AthU/xAbZMuo381Q/KwXA9b47zR8opL/lZv5jFJw3gVas2lReJHT7SA+9mnAOZyjhC0mwnFzcNTmAAqjjXnVx5D7K8q/Fudaf10fwU0H5g4Dq8czLWbMVT/wDc0/8AtjAycOJZhJsQN/3FP88Srwn3xa2iBoB9FW7EA6yeJKHeuW8zM38bs35nDFZBsFHsowevCR2xKvCh2w+TzSds3c0IfK8W8JlIbYyAbKbRf5EjAnEuINWr6VkrJAAuXM3Y9CSfkAFAsMM4/lgjIB1H88Wv+HeQWrn6IYSoIJBEi7ql/wDVitzGUwXnwVjajnjKLcFRZ3KVVN0aN/KcbThWW1U0Y7lFJ+YBxoPjjhHg13AkK/Om4ENuAOwM/hiHgGVmhSP/AE0/9gwWvzBUPneUMuUw79E6WxbNl8R16BCluo2A8xPp3xHuDRJKruVX0ck0hl7iDtc7b++LDLcMk6ABpYCR1mBzC0mCdh29MPzTKiC4i1tmgC07giQb/wBIA9bNKyhVI5ApYnlNhMCASvMTAj5dMcupiXO+VWBoGqNpqqAkNrK6tBaN46SNjPlttPTC1whNwrQCVkrKkXEdgO30xncxxdWZkgnSGbfTzaRCx3JKjbY22w/KZzxAysGmWqixMgh+WJkpcN1kkWO2KOyf8xTZgjWy9Oskka1DSU1lTEtUkECJGkW2tfe5WXyioTzysLA6mRaJHre1pxQ5POPSFMx0d7LJkqdIZOhIHWQcWVXiICTULLEsBIHQGCBBAU6TsJJ98Xtc+m7u6SkMOCLdDMRvthyW3wmUzuuCpBUgrLWLMouFJjm/vYzgH/8A13UqHoyosWBiQb7EXgXG2OpSxpeSC1Z3UrWK2PwpxOjRqGpUXmAhRtAMywnfYj2OAuIcQ8ZKtNxqDsSpJIgMrBST1IMEYD4/xigVpVKSMpCgMhCkGdykmw72E4zmRz1QB9UINRZCxkERe/SCwj0jHFrOqPMg2Gnr16Jpy2QzEiny3KWDG1geb8j9MQ5qoEkk7oAqkX5pLLPywCma1uSOrNpUSFkyWm1zcWxJW1VUiOcdjyzJCzF4m3yxcKZBukKdm8xSCkMTPk09w4Cy3bYTHb1xJlqZKggDbYiduW0bC23TFXkKdOqlSVl1hSWJEnuPUGe/T0xY5ewOsQZMTAMbTEdYJ+eLHtyiBqpoq6tmldy/imVQGOa14iBNr/KcSHXVI5gLQCzAdzeD3P44ruBBnYDw0dUiVqSARqkgNspg/TBee4eog5Ys6uASABKNJsB1Xa47/TS5oacsoFqusvXKyxpKakkgEDSJJJ0qogGAI7YuMpnCaVNqytTOo8wjSAtgWA8xJle+x9MZ/hDVKBBrCkvcPUQNpgcwUEkz8p7Yu0zlIoQQ7EkqrUioVdN9YRjEn1J3xz67LxHqrmuA3q44dRpOuo6OZQBJQEqQwOnp6dIA9sF1uD01YQC1rhRMAg2m/S8n+WKanlq5ph6llYLoSmadMPAgCCV1d9xc9MCZjilclgVDUrK3N5IlTKsIIlYBgKdhvjKBVJIY+3FNJiStK+Vy6yhJDDe6VHAkwY6RsQpmOmK1sq61NRMqBPKDJg2YRdfKOoNhtAOBRkgaekmAjagdqjoFlgg3uCTBvyg4mpU5pmkKhhi2skHxNAIhAbEFRy2vPW2EDSP5SpBiSpKuTZ30FoLiQOlxMzENKm5HWcE8L+F6ZUsp0sxtEEFtv2e/a4HTDctTemGLVKplxB8iqIE2BJlhqafWBeThDWKutQMFNMRAX9mLkz97cCw+0Z3GIX1IysdCMwh63wg6ooVtQXVM2a5EgAAzImAOx9cQL8N1gmhk0Sx1MQO4gDr2MR6Yta2d11nfl8SRKTADFQGLBZnYLtvqOxtPmsyKYFRm8vRdQBJJNrdB8sO3GYhoAsd+ikhdwzJihDWDBCptbUVRd/8AKPoO+Mt8ScAqFXCLJZRfpqgAz7tMDGlGfVydYg3sW0KDElo2JtJ2iDYWxFWz+iTcm4Qjm1DV5hfc3uN4I2xbTxtZriY1SwFnsrwWoXfl8xLqQJEBAoBPQkqR8xgheC1CCQsx2NyewHU9fbFvVruLmCiNqK6gDEgkNtGy9Tv7RPlM2Y1Hf7IkyoBuwv0B/HFrto1tQAmEb1mWybDdT9Jj37Y5MtOw/v0740LViSZYKD0mGNhzGLz1MDdh7YgznGKd1ALOCFZmUSN7CLmDP4E7HFrdpPNsl+utUcgImV578YUir05Ecp/PGn/wv4c6Vkd1I1VKIAIIsGDE/iPpi7zaZeqv64IwHMHCksGIgR9bTO3ocF5LMhaisnJcHmIlArTJt6em/TFVbHmoyMseKvpObTuVqf8AEDhWvL+IBenvAI5Wsbn1j8cZf4dy/wD5aif+lT//ABri0HHqgWoKpV0fUN9RjRsG+f4H2wHwzOpSpU6djCgDXaQqqoMW6f3vFjMfTaDYqt/muqUsAcaofqyCGgGGvBuPs9zI+mDnzY0hnIBYkQARG8Ez02G5vbEb5xbalbmEcwMXjVque3QdDiV8e1wGQKsNIusxRzwKFGciRygAOw8twD0JHSYAHTEdcChVGsNDA2phWGuIhrS0aUMseu5scXXFOCKwpgO1OqZJZBBddRDIRYBY+UyMV1bglVhKOJLatJZggEyUNiTP3tzeO2KWVaRvMT1qpdV3FM5RpBKmkMGvJYsVGwlVNgNTwRAuYJ6PoVhDZhhUXlALh9KoCFQKq6AQQwHKDeLeXULnKcECUf1z8oY8us6YLawJYXI2vG2wvibMZBXJYkaXltOhTcqF8SdNplVPcA7RafE04jmiWmxWdy+ebVy03eoFLKWSIbTadSrMgi4vbc4JrViV0kBlZubWxImDBvPWLR0iNsWTcLpkFWTxAdzUYiTYwDEgExKmRtaNxh8O8ytqCAyGQkOCwAHazdJO+ofdwe1pG+nXW5JeEC1ZqTg6SQvXSSDN17aSSQDHKDFxONHk+IUUhNUbyrMXkEmdNuuozYbemBBkGiy3YfaZWLMDyCBAsCT6x6YjrZGnTKqmk6buACzBtKqTqB0i0ESNie9kdUa+32TCdVZce4YrqKlAarAqoWIINrbiwO/frbGKzFZgBRMGkOdW+6twy9IgkmOy41mSbQAyao1HUSCrAxqkKdheOsgNGM3xNKjFTp1SZimNWmXupAuBvM9R3nD0nd4gpKgGqz/EKjK6UwYIZVWNr9d5sIt6j0xa8NFUUzA5geS9yYEEek2/HriTi/D0Gl2aGc+IsGQYQKdPKCLaTEWKkYbRzimqguoCtMbgKVVR63JHsMaXPzsEBVEQq+hmRTqxJlGcm2q5JMExuNo74NzOVZiPDJgCLybiex7EYE4pSStVVqbQ9QkvpUlf3Sx6C0H2wXkAVWNNweYgRLQJ/p8sM82Dhr4IOVXkuGNVmg2bp0tDHVTrMyQwna0HY7m3bCZpsvTonwGq+IGAcNDU3gEF6bjS0XNiLipsMdjsbA0mCTrBhWRAV5ksg1aihLU1VmGtqdYl3lG5TMkGQSRP2W3xHwqnmBVcaqlT9HJGpSyMYMDmmCAQbEHeJgiOx2ObWeWF41/6iAJVhxnjmYrVX0FalGmohCDTYqySAysWUsJkkC+mRa2J8pn6i8tTSPKyHUCsr5UUgmbBbkAgzthMdiZG2YBu/EoKPiFMVldzq0yPBDVADWKK45HIDIVfUYsN97T3DuIwQpZQq0yXRSpFmu2qYLCRyqZlxIBnC47BbTDmkHd+/ZQGVKzKWAZqiq2ojxNSuNTACA8agNxMEaljzTg2i9WQPC8QwLKRrIBRpKHmIJaQbqdMHocJjsZakBubjyKk3QeY4nRqqyrXuLNZVYHmtL6liVC6pNtIvM4lrVVarqDEKsBNTB0mCCFAvM7kiSWWIx2OxqqYcU7A9GFJRFGrTAY1DfULOFckG+kSTANwCReSALhgOMpUpsTYVAoVlYFFJAJTQwZmF95mYH3TPY7GNxLDx/Ee6sa2Qm5yuEglqtVxYuHGmOVifEUaSoBa0Wk7b4k/Q3deZgAuhamkalZ2DcwhbySABIJ1z6FcdiyoMgEdaJd6FzDhZBkqVgVbSCxBssglxB8oiY6SRYqxRGOlW12Y14CAfbJUJJa6CCBIXaxnsdguaLDxUmPohs0jV2ALtROsrSamXBmw0tM3BJsAJgwBh+U4UiUy1RzPOKlXwUTmLEgISsze7WmBbbHY7FJeRDRpP5hGLSerKGrw1qZUIa0QgOvQfCBhQrj7uldRkSIsBaSMrm6lIEtNTSBrCppIhQwGoBtK2AuN+oknHY7DB2f5vLnHurgO6lbiDsNQABVQSSVgzzMQJ6ARAbe4no5M6IQkbk6QoYzpXqW7gQLdDHr2OwXMaBp1CoJN08ZxjIQgPqiSQQzAKeUg8xA1WF4A+8Mc1UF+Z4KQFQNo1EiSXJ36QFAF5JJ8q47E7MB0eX6UmyYnFWTlYFSt1lT5WHMQokm4ImBf2IE+W4pScgVGGkRB1S2owVAWZkwIgTzE+/Y7DDDsc2dLIzeE7J5+nWJiVExNRbDmKtYDzgkGDBt3Fn1M5VJKgEAQDp1cwB5tJkSx1AH1+mOx2M9Sm1jiBuQLiU6lXqkk6FUDck09oP8A27mY3O3dTmVmAeU3nSGCmY5Tsep/s47HYTKD15SjMFRZiqB7C2ov1MLzKJvJaJ+U4ccwiiGUkkblYUqLNEiANp+W3XsdhwwEdeAKDjAQ9bKUayHWtMiCJJXlBJkAgyDq5jcbdOgtLhOVpNK0lYwAQGJW5JgqT33/AOMLjsMS5oIBsioK3wzQ1vUTWjEQC5Yz5YEESCZG5+mO/wDCdBmdzUYa2ZoDNEEz0bHY7AdXqgAhxRygmF//2Q==" // Replace with the actual image URL
                alt="Solar"
                className="w-full h-40 object-cover rounded-t-lg mb-4" // Adjust size and spacing as needed
              />
                <h3 className="text-xl font-semibold">Post ID: {post.post_id}</h3>
                <p className="text-sm mb-2">Units: {post.units}</p>
                <p className="text-sm mb-4">Price per Unit: ${post.price_per_unit}</p>
                {userRole !== 'Admin' && (
                  <button
                  id='buy-btn'
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
