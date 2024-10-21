// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TextTransition, { presets } from 'react-text-transition';

// Importing images
import heroImage from '../assets/heroimage1.svg';
import fotiImage from '../assets/FOTI.jpg';
import safariImage from '../assets/IMG-20240328-WA0059.jpg';
import culturalImage from '../assets/IMG-20240328-WA0079.jpg';
import beachImage from '../assets/IMG-20240328-WA0037.jpg';

const texts = [
  'The Foundations of Tourism Institute (FoTI) is the only institute in the world that empowers students to lead the future of tourism through hands-on training, research-driven projects, and community collaboration.',
  'FoTI uniquely bridges education and real-world applications, fostering entrepreneurship and responsible tourism practices.',
  'Our Travel Agency for Hire concept gives tourism students on-the-job training and facilitates them to be self-employed.',
  'Our programs include interactive workshops, field experiences, and collaborations with industry leaders.',
];

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // State for tracking the current text index
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
            <TextTransition
              text={texts[index]} // Use the current text based on index
              springConfig={presets.wobbly} // Add a spring configuration for transition effect
              className="text-2xl font-semibold text-center"
            />
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
              <h3 className="text-xl font-bold">FoTI Ventures</h3>
              <p>Advance your career with specialized postgraduate degrees.</p>
            </motion.div>
            <motion.div
              className="bg-[#F97316] text-white p-6 rounded-lg"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold">FoTI labs</h3>
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
                Innovating Local Tourism
              </h3>
              <p className="text-gray-600 mt-2">
                Follow John as he partnered with local businesses to enhance tourism experiences in his community.
              </p>
              <a 
                href="#"
                className="mt-4 inline-block text-[#F97316] font-medium hover:underline"
              >
                Watch the Documentary
              </a>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mt-12 p-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1877F2] text-left">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <img src={safariImage} alt="Safari" className="w-full rounded-lg" />
            <img src={culturalImage} alt="Cultural" className="w-full rounded-lg" />
            <img src={beachImage} alt="Beach" className="w-full rounded-lg" />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-12 p-4 bg-[#1877F2] text-white">
          <div className="flex flex-col items-center">
            <p className="mb-4">Connect with us on social media</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
