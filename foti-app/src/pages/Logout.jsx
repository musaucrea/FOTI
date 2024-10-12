// src/Logout.jsx
import React, { useEffect, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/signup'); // Redirect to SignUp or another appropriate page
  }, [logout, navigate]);

  return null; // Optionally, show a loading indicator
};

export default Logout;

