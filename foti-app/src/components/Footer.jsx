// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-foti-blue text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">FoTI</h2>
            <p className="text-foti-green">Foundations of Tourism Institute</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-foti-green">Home</Link></li>
              <li><Link to="/about" className="hover:text-foti-green">About Us</Link></li>
              <li><Link to="/services" className="hover:text-foti-green">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foti-green">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/fotiventures" target="_blank" rel="noopener noreferrer" className="hover:text-foti-green">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com/fotiventures" target="_blank" rel="noopener noreferrer" className="hover:text-foti-green">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/fotiventures" target="_blank" rel="noopener noreferrer" className="hover:text-foti-green">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/fotiventures" target="_blank" rel="noopener noreferrer" className="hover:text-foti-green">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-foti-green" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Email: <a href="mailto:info@fotiventures.org" className="hover:text-foti-green">info@fotiventures.org</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-foti-green">+1 (234) 567-890</a></p>
          </div>
          <div className="p-4">
          <a href="#about" className="text-[#1E3A8A]">About Us</a>
          <span className="mx-2">|</span>
          <a href="#programs" className="text-[#1E3A8A]">Programs</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-[#1E3A8A]">Contact</a>
        </div>
        <div className="text-gray-500">© 2024 Foundations of Tourism Institute</div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-foti-green">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foti-green">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Foundations of Tourism Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
