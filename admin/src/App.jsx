import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Feedback from './pages/Feedback/Feedback';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Initially don't show login form

  useEffect(() => {
    // Check local storage for authentication token or other relevant data
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false); // Hide login form after successful login
    // Store token in localStorage
    localStorage.setItem('token', 'your_token_here');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(false); // Ensure login form is hidden after logout
    // Clear token from localStorage
    localStorage.removeItem('token');
  };

  const url = 'http://localhost:4000'; // Backend URL

  return (
    <div>
      {/* Conditional rendering of Navbar */}
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      <hr />
      <div className="app-content">
        {/* Show login form if not authenticated */}
        {!isAuthenticated && showLogin && <Login onLogin={handleLogin} />}
        
        {/* Show Sidebar only if authenticated */}
        {isAuthenticated && <Sidebar />}
        
        {/* Routes */}
        <Routes>
          {/* Route for default path */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/add" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          {/* Login route without Navbar */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          {/* Protected routes */}
          {isAuthenticated && (
            <>
              <Route path="/users" element={<Users url={url} />} /> {/* Ensure correct path */}
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              <Route path="/feedback" element={<Feedback url={url} />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
