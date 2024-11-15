
import React from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import './App.css'; 
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
    <Router>
        <Header />   
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
    
      
    </>
      
    
  );
}

export default App;
