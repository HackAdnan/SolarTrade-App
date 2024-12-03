import React from 'react';

import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import './App.css'; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace'; // Import Marketplace component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <>
      <Router>
        {/* The Header is rendered on all pages */}
        <Header />   
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/marketplace" element={<Marketplace />} /> {/* Add Marketplace route */}
          <Route path='/admindashboard' element={<AdminDashboard/>} />
          <Route 
            path="*" 
            element={<h1 className="text-center text-4xl font-poppins mt-20">404: Page Not Found</h1>} 
          /> {/* Handle invalid routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
