import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App';
import './index.css'; // Optional: Import your global CSS file

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
