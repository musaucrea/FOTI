// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPackages from './pages/TourPackages';
import Research from './pages/Research';
import Careers from './pages/Careers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Donate from './pages/Donate'; // Import the Donate component
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import CreatePackage from './components/CreatePackage';
//import Dashboard from './pages/Dashboard'; // We'll create this next

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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/donate" element={<Donate />} /> {/* Add Donate Route */}
  <Route path="/sign-up" element={<SignUp />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="*" element={<NotFound />} /> {/* Add this line */}
  <Route path="/" element={<Dashboard />} />
        <Route path="/create-package" element={<CreatePackage />} />
  
      </Routes>
    </Router>
  );
}

export default App;
