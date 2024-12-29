import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct for React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap

// This is how you create the root in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
