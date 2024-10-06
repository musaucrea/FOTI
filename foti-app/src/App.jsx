// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPackages from './pages/TourPackages';
import Careers from './pages/Careers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Donate from './pages/Donate'; // Import the Donate component
import NotFound from './pages/FotiProjects.jsx';
import Dashboard from './components/Dashboard';
import CreatePackage from './components/CreatePackage';
import RegistrationComponent from './components/RegistrationComponent.jsx'; // Replace with your actual path
import LoadingSpinner from './components/LoadingSpinner';
import ResearchPage from './components/Research/ResearchPage';
//import Research from ".pages/Research.jsx" ;
// Lazy load the Research component for performance optimization
const Research = lazy(() => import('./pages/Research.jsx'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/donate" element={<Donate />} /> {/* Add Donate Route */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} /> {/* Add this line */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Fixed path for Dashboard */}
          <Route path="/create-package" element={<CreatePackage />} />
          <Route path="/register" element={<RegistrationComponent />} /> {/* Updated path for Registration */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
