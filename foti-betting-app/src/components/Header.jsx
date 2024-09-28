import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroimage.svg';

const Header = () => {
  return (
    <div className="relative w-full h-64">
      <img 
        src={heroImage} 
        alt="Hero Image" 
        className="absolute inset-0 object-cover w-full h-full" 
      />
      <div className="relative z-10 p-4 bg-fotiBlue text-white bg-opacity-75">
        <h1 className="text-2xl font-bold">FoTI Betting App</h1>
        <nav>
          <ul className="flex space-x-6 mt-2">
            <li>
              <Link to="/" className="hover:text-fotiOrange transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/winner" className="hover:text-fotiOrange transition duration-300">Winner</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-fotiOrange transition duration-300">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
