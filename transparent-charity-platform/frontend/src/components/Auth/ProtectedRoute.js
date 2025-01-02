import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  const isAuthenticated = !!authToken; // Converts to a boolean

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
