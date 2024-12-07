// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import { createRoot } from 'react-dom/client'; // Correct for React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// main.jsx (Recommended for React 18)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // If your CSS is in this file
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
