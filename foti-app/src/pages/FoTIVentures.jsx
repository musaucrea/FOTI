// src/pages/FotiVentures.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Importing images correctly
import fothinktankImg from "../assets/Amboseli.jpg";
import ecotourismFarmImg from "../assets/Kenya.jpg";
import hackathonsImg from "../assets/Coast.jpg";

const FotiVentures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,      // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Header Section */}
      <motion.header
        className="bg-blue-600 text-white py-12"
        data-aos="fade-down"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center mt-8">
          <h1 className="text-5xl font-extrabold">FoTI Ventures</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Pioneering Sustainable Tourism Initiatives with Innovation and Impact
          </p>
        </div>
      </motion.header>

      {/* Introduction Section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl font-semibold text-blue-600 mb-6">
          Introduction
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          FoTI Ventures is the strategic arm of the Foundations of Tourism Institute (FoTI), committed to advancing sustainable tourism through creative projects and community-driven solutions. Our mission is to foster positive social, economic, and environmental impacts while equipping students and local communities with hands-on experience.
        </p>
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section
        className="bg-gray-100 container mx-auto px-4 py-16"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          We aim to promote responsible tourism that uplifts communities, preserves cultural heritage, and promotes environmental sustainability. Through our initiatives, FoTI Ventures develops tourism models that benefit both travelers and host regions.
        </p>
      </motion.section>

      {/* Key Projects Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
          Our Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Project Card 1: FoTI Think Tank */}
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={fothinktankImg}
              alt="FoTI Think Tank"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">FoTI Think Tank</h3>
              <p className="text-gray-700 mb-6">
                A collaboration hub for students, researchers, and experts to address tourism challenges and create forward-thinking solutions.
              </p>
              <Link
                to="/ventures/fothinktank"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Project Card 2: Ecotourism Farm */}
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={ecotourismFarmImg}
              alt="Ecotourism Farm in Kilifi"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Agri-Ecotourism Farm in Kilifi</h3>
              <p className="text-gray-700 mb-6">
                A model for eco-friendly accommodations featuring organic farming and sustainable practices that minimize environmental impact.
              </p>
              <Link
                to="/ventures/ecotourismfarm"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Project Card 3: Hackathons for Innovation */}
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={hackathonsImg}
              alt="Hackathons for Innovation"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Hackathons for Innovation</h3>
              <p className="text-gray-700 mb-6">
                Engaging the community in technology-driven challenges that offer new solutions to tourism issues.
              </p>
              <Link
                to="/ventures/hackathons"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="bg-gray-100 container mx-auto px-4 py-16 text-center"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">
          Get Involved
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We welcome students, professionals, and community members to join us in building a sustainable future for tourism. Get involved with FoTI Ventures today.
        </p>
        <Link
          to="/contact"
          className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </motion.section>

      {/* "Join Us Today!" Animated Section */}
      <motion.section
        className="bg-[#1E3A8A] text-white text-center py-8 mt-12"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <h2 className="text-3xl font-bold">Join Us Today!</h2>
        <p className="mt-2">Be a part of something great. Explore your potential with FoTI.</p>
        <motion.button 
          onClick={() => navigate('/SignUp')}
          className="mt-4 bg-[#F97316] py-2 px-4 rounded transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Waitlist
        </motion.button>
      </motion.section>

      {/* Comprehensive Footer */}
      <motion.footer
        className="bg-gray-800 text-gray-200 py-6"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
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
      </motion.footer>
    </div>
  );
};

export default FotiVentures;
