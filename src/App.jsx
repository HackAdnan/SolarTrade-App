import React from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const App = () => {
  return (
    <>
    <Router>
        <Header />   
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
    
      
    </>
      
    
  );
}

export default App;
