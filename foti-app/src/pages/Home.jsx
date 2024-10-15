// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Importing images
import heroImage from '../assets/heroimage1.svg';
import fotiImage from '../assets/FOTI.jpg';
import safariImage from '../assets/IMG-20240328-WA0059.jpg';
import culturalImage from '../assets/IMG-20240328-WA0079.jpg';
import beachImage from '../assets/IMG-20240328-WA0037.jpg';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Function to Navigate to Sign-Up Page
  const handleStartJourney = () => navigate('/SignUp');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-screen mt-8 mx-0"
          data-aos="fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={heroImage} 
            alt="Tourism" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4">
              Welcome to Foundations of Tourism Institute
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white px-6 max-w-xl">
              Our Travel Agency for Hire concept gives tourism students on-the-job training and facilitates them to be self-employed.
            </p>
            <motion.button
              onClick={handleStartJourney}
              className="mt-6 bg-[#F97316] text-white py-2 px-6 rounded transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.button>
          </div>
        </motion.div>

        {/* About Us Section */}
        <section id="about" className="mt-12 p-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1877F2] text-left">About us</h2>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="md:w-1/2 p-4" data-aos="fade-right">
              <p className="text-lg">
                FoTI empowers tourism students to research, create, and sell products. Approved tour packages must deliver a documentary and academic publication. Students manage business operations alongside their studies, with minimal supervision, and profits fund further research.

                Research is shared through YouTube documentaries and the FoTI Journal. Their work is featured on the FoTI website and social media for potential job opportunities. Graduates can join FoTI's Travel Agency for Hire, become certified agents, or compete for scholarships. Top postgraduates may join the FoTI Think Tank as tourism researchers.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img src={fotiImage} alt="Students in action" className="rounded-lg w-full h-auto"/>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mt-12 p-4" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-[#1877F2] text-left">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Program Card */}
            <motion.div
              className="bg-[#F97316] text-white p-6 rounded-lg"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold">FoTI Think Tank</h3>
              <p>Explore a variety of undergraduate courses in tourism and hospitality.</p>
            </motion.div>
            <motion.div
              className="bg-[#F97316] text-white p-6 rounded-lg"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold">Postgraduate Programs</h3>
              <p>Advance your career with specialized postgraduate degrees.</p>
            </motion.div>
            <motion.div
              className="bg-[#F97316] text-white p-6 rounded-lg"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold">Mentorship Programs</h3>
              <p>Gain insights from industry experts through our mentorship offerings.</p>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="mt-12 px-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1877F2] text-center">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-700 mt-4 text-center max-w-3xl mx-auto">
            Real Stories, Real Impact. Discover how FoTI students are shaping the future of tourism with their innovative ideas. Each of these student-driven tourism projects showcases creativity, entrepreneurship, and real-world success.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[#1877F2]">
                Adventure Through the Heart of Africa
              </h3>
              <p className="text-gray-600 mt-2">
                Meet Sarah, an undergraduate who created a cultural immersion tour that captured the attention of global tourists.
              </p>
              <a 
                href="#"
                className="mt-4 inline-block text-[#F97316] font-medium hover:underline"
              >
                Watch the Documentary
              </a>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-[#1877F2]">
                Sustainable Tourism in Kenya
              </h3>
              <p className="text-gray-600 mt-2">
                John, a postgraduate student, developed a sustainable eco-tour that contributed to local wildlife conservation.
              </p>
              <a 
                href="#"
                className="mt-4 inline-block text-[#F97316] font-medium hover:underline"
              >
                Read the Publication
              </a>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <motion.a 
              href="#"
              className="inline-block bg-[#F97316] text-white py-2 px-6 rounded-md transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More Success Stories
            </motion.a>
          </div>
        </section>

        {/* Why FoTI Section */}
        <section id="why-foti" className="mt-12 p-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1877F2] text-left">Why FoTI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            {/* Key Features */}
            <motion.div
              className="p-4 border rounded-lg flex flex-col items-left"
              data-aos="flip-left"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-bold text-left">Innovative Learning Model</h3>
              <p className="text-left">Gain hands-on experience while earning academic credits.</p>
            </motion.div>
            <motion.div
              className="p-4 border rounded-lg flex flex-col items-left"
              data-aos="flip-left"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-left">Revenue from Your Products</h3>
              <p className="text-left">Students create and sell their tour packages, reinvesting in their own development.</p>
            </motion.div>
            <motion.div
              className="p-4 border rounded-lg flex flex-col items-left"
              data-aos="flip-left"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-bold text-left">Professional Opportunities</h3>
              <p className="text-left">Graduates can become certified travel agents and compete for postgraduate scholarships.</p>
            </motion.div>
            <motion.div
              className="p-4 border rounded-lg flex flex-col items-left"
              data-aos="flip-left"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-bold text-left">Global Exposure</h3>
              <p className="text-left">Promote your tours on our website, social media platforms, and YouTube channel, allowing you to be discovered by employers and partners worldwide.</p>
            </motion.div>
          </div>
        </section>

        {/* Tour Packages Section */}
        <section id="tour-packages" className="mt-12 p-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1877F2] text-left">Discover Our Student-Created Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Tour Package Card */}
            <motion.div
              className="bg-[#60A5FA] p-4 rounded-lg"
              data-aos="zoom-in"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={safariImage} alt="Safari Adventure" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-4">Safari Adventure</h3>
              <p>A thrilling safari experience awaits you!</p>
              <motion.button
                className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Tour
              </motion.button>
            </motion.div>

            {/* Cultural Immersion Card */}
            <motion.div
              className="bg-[#60A5FA] p-4 rounded-lg"
              data-aos="zoom-in"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={culturalImage} alt="Cultural Immersion" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-4">Cultural Immersion</h3>
              <p>Experience rich cultures and traditions.</p>
              <motion.button
                className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Tour
              </motion.button>
            </motion.div>

            {/* Beach Getaway Card */}
            <motion.div
              className="bg-[#60A5FA] p-4 rounded-lg"
              data-aos="zoom-in"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={beachImage} alt="Beach Getaway" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-4">Beach Getaway</h3>
              <p>Relax and unwind at stunning beaches.</p>
              <motion.button
                className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Tour
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
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
      </div>

      {/* Footer Section */}
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

export default Home;
