// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Tour Packages</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
