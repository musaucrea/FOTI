// src/components/Navbar.jsx

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Branding */}
        <div className="text-blue-600 font-bold text-xl">
          FOTI
        </div>

        {/* Center Section: Main Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/packages" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Tour Packages
          </NavLink>
          <NavLink 
            to="/research" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Research
          </NavLink>
          <NavLink 
            to="/students" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            FoTI Ventures
          </NavLink>
        </div>

        {/* Right Section: Authentication Links and Donate Button */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink 
            to="/sign-in" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Sign In
          </NavLink>
          <NavLink 
            to="/sign-up" 
            className={({ isActive }) => 
              isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Sign Up
          </NavLink>
          {/* Donate Button */}
          <NavLink 
            to="/donate" 
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Donate
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {/* Main Navigation Links */}
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/packages" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)}
              >
                Tour Packages
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/research" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)}
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/students" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)}
              >
                Students
              </NavLink>
            </li>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Authentication Links */}
            <li>
              <NavLink 
                to="/sign-in" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/sign-up" 
                className={({ isActive }) => 
                  isActive ? 'font-bold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </li>
            {/* Donate Button */}
            <li>
              <NavLink 
                to="/donate" 
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
