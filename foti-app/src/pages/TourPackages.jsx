// src/pages/TourPackages.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Importing images correctly
import coastImage from '../assets/coast.jpg';
import ukundaImage from '../assets/Ukunda.jpg';
import malindiImage from '../assets/malindi.jpg';
import masaiMaraImage from '../assets/masai mara.jpg';
import amboseliImage from '../assets/Amboseli.jpg';
import samburuImage from '../assets/Samburu.jpg';
import naivashaImage from '../assets/Nakuru.jpg';
import nakuruImage from '../assets/Naivasha.jpg';
import kenyaImage from '../assets/Kenya.jpg';

const TourPackages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,      // Whether animation should happen only once
    });
  }, []);

  const packages = [
    { id: 'mombasa', title: 'Mombasa North Coast', imageUrl: coastImage, packagesCount: 3 },
    { id: 'diani', title: 'Diani/Ukunda', imageUrl: ukundaImage, packagesCount: 2 },
    { id: 'malindi', title: 'Malindi/Watamu', imageUrl: malindiImage, packagesCount: 2 },
    { id: 'maasai', title: 'Maasai Mara', imageUrl: masaiMaraImage, packagesCount: 2 },
    { id: 'amboseli', title: 'Amboseli', imageUrl: amboseliImage, packagesCount: 1 },
    { id: 'samburu', title: 'Samburu', imageUrl: samburuImage, packagesCount: 1 },
    { id: 'naivasha', title: 'Naivasha', imageUrl: naivashaImage, packagesCount: 1 },
    { id: 'nakuru', title: 'Nakuru', imageUrl: nakuruImage, packagesCount: 1 },
    { id: 'mt-kenya', title: 'Mt Kenya', imageUrl: kenyaImage, packagesCount: 1 },
  ];

  const handlePackageClick = (id) => {
    navigate(`/packages/${id}`);
  };

  const handleStartJourney = () => navigate('/SignUp');

  return (
    <div className="p-16">
      {/* Page Title */}
      <motion.h2
        className="text-3xl font-bold text-[#1877F2]"
        data-aos="fade-down"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tour Packages
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        View and explore student-developed tour packages that combine innovation and academic research.
      </motion.p>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={pkg.imageUrl}
              alt={pkg.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#8B4513] group-hover:bg-opacity-50 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
              <motion.p
                className="text-white cursor-pointer hover:text-[#ff7f00] transition-colors duration-300"
                onClick={() => handlePackageClick(pkg.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {`(${pkg.packagesCount}) Packages`}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-8 text-center">
        <motion.a
          href="/packages"
          className="text-[#1E3A8A] underline hover:text-[#ff7f00] transition-colors duration-300 no-underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More...
        </motion.a>
      </div>

      {/* "Join Us Today!" Animated Section */}
      <motion.section
        className="bg-[#1E3A8A] text-white text-center py-8 mt-12"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold">Join Us Today!</h2>
        <p className="mt-2">Be a part of something great. Explore your potential with FoTI.</p>
        <motion.button 
          onClick={handleStartJourney}
          className="mt-4 bg-[#F97316] py-2 px-4 rounded transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Waitlist
        </motion.button>
      </motion.section>

      {/* Comprehensive Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-6 md:flex md:justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">FoTI</h2>
            <p className="mt-2 text-sm">
              Foundations of Tourism Institute - Empowering students through research and professional growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1">
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} FoTI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default TourPackages;
