// App.jsx
import React from 'react';
import Header from './components/Header'; // Adjust the path as needed
import HeroSection from './components/HeroSection'; // Import HeroSection component
import './App.css'; // Or any other global styles if applicable
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
        <Header />   
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/' element={<HeroSection/>}/>
      
      </Routes>
    </Router>
    
      
    </>
      
    
  );
}

export default App;
