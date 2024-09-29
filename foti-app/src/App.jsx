// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPackages from './pages/TourPackages';
import Research from './pages/Research';
import Careers from './pages/Careers';
//import heroimage1 from '../assets/images/heroimage1.svg'; // Adjust the path as needed


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/research" element={<Research />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
