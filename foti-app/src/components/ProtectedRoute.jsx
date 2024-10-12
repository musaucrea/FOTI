// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirect unauthenticated users to the Sign-Up page
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
