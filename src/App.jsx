// import React from 'react';

// import Header from './components/Header'; 
// import HeroSection from './components/HeroSection'; 
// import './App.css'; 
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import Marketplace from './components/Marketplace'; // Import Marketplace component
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import AdminDashboard from './components/AdminDashboard';

// const App = () => {
//   return (
//     <>
//       <Router>
//         {/* The Header is rendered on all pages */}
//         <Header />   
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/sign-in" element={<SignIn />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/marketplace" element={<Marketplace />} /> {/* Add Marketplace route */}
//           <Route path='/admindashboard' element={<AdminDashboard/>} />
//           <Route 
//             path="*" 
//             element={<h1 className="text-center text-4xl font-poppins mt-20">404: Page Not Found</h1>} 
//           /> {/* Handle invalid routes */}
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import NewHeader from './components/NewHeader';
import HeroSection from './components/HeroSection';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import AdminDashboard from './components/AdminDashboard';
import RecurringPosts from './components/RecurringPosts';

const App = () => {
  const ConditionalHeader = () => {
    const location = useLocation();

    if (location.pathname === '/dashboard') {
      return <NewHeader />;
    }
    return <Header />;
  };

  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path='/recurringposts' element={<RecurringPosts/>}/>
        <Route
          path="*"
          element={
            <h1 className="text-center text-4xl font-poppins mt-20">
              404: Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;