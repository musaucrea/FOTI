// src/pages/Home.jsx
//import React from 'react';

import React, { useState } from 'react';

const Home = () => {
  // State for Modal Visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    degreeProgram: '',
    graduationYear: '',
    currentlyStudying: false,
  });

  // Function to Open Modal
  const openModal = () => setIsModalOpen(true);

  // Function to Close Modal
  const closeModal = () => setIsModalOpen(false);

  // Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form Data Submitted:', formData);
    // Reset Form
    setFormData({
      name: '',
      email: '',
      university: '',
      degreeProgram: '',
      graduationYear: '',
      currentlyStudying: false,
    });
    // Close Modal
    closeModal();
    alert('Registration Successful!');
  };

  return (
    <div className="bg-white text-gray-800 p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <div className="text-3xl font-bold text-[#1877F2]">FoTI</div>
        <nav className="space-x-4">
          <a href="#programs" className="text-[#1E3A8A] hover:text-[#F97316]">Programs</a>
          <a href="#tour-packages" className="text-[#1E3A8A] hover:text-[#F97316]">Tour Packages</a>
          <a href="#contact" className="text-[#1E3A8A] hover:text-[#F97316]">Contact</a>
          <button className="bg-[#16A34A] text-white py-2 px-4 rounded hover:bg-[#F97316]">Donate</button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-screen mt-8">
        <img 
          src="/src/assets/heroimage1.svg" 
          alt="Tourism" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4">
            Welcome to Foundations of Tourism Institute
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white px-6 max-w-xl">
            Our Travel Agency for Hire concept gives tourism students on-the-job training and facilitates them to be self-employed.
          </p>
          <button 
            onClick={openModal}
            className="mt-6 bg-[#F97316] text-white py-2 px-6 rounded hover:bg-[#F97316]/80 transition duration-300"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Registration Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded mt-1"
                />
              </div>

              {/* Student Email Address */}
              <div>
                <label htmlFor="email" className="block text-gray-700">Student Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded mt-1"
                />
              </div>

              {/* University */}
              <div>
                <label htmlFor="university" className="block text-gray-700">University</label>
                <input 
                  type="text" 
                  id="university" 
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded mt-1"
                />
              </div>

              {/* Degree Program */}
              <div>
                <label htmlFor="degreeProgram" className="block text-gray-700">Degree Program</label>
                <input 
                  type="text" 
                  id="degreeProgram" 
                  name="degreeProgram"
                  value={formData.degreeProgram}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded mt-1"
                />
              </div>

              {/* Year of Graduation */}
              <div>
                <label htmlFor="graduationYear" className="block text-gray-700">Year of Graduation</label>
                <input 
                  type="number" 
                  id="graduationYear" 
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded mt-1"
                  min="1900"
                  max="2100"
                />
              </div>

              {/* Currently Studying */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="currentlyStudying" 
                  name="currentlyStudying"
                  checked={formData.currentlyStudying}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#1E3A8A] border-gray-300 rounded"
                />
                <label htmlFor="currentlyStudying" className="ml-2 text-gray-700">
                  Currently Studying
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit"
                  className="w-full bg-[#1E3A8A] text-white py-2 px-4 rounded hover:bg-[#F97316] transition duration-300"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section id="about" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A] text-left">About us</h2>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2 p-4">
            <p className="text-lg">
              FoTI empowers tourism students to research, create, and sell products. Approved tour packages must deliver a documentary and academic publication. Students manage business operations alongside their studies, with minimal supervision, and profits fund further research.

              Research is shared through YouTube documentaries and the FoTI Journal. Their work is featured on the FoTI website and social media for potential job opportunities. Graduates can join FoTI's Travel Agency for Hire, become certified agents, or compete for scholarships. Top postgraduates may join the FoTI Think Tank as tourism researchers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="src/assets/tourist students.png" alt="Students in action" className="rounded-lg w-full h-auto"/>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A] text-left">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Program Card */}
          <div className="bg-[#F97316] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">FoTI Think Tank</h3>
            <p>Explore a variety of undergraduate courses in tourism and hospitality.</p>
          </div>
          <div className="bg-[#F97316] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">Postgraduate Programs</h3>
            <p>Advance your career with specialized postgraduate degrees.</p>
          </div>
          <div className="bg-[#F97316] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">Mentorship Programs</h3>
            <p>Gain insights from industry experts through our mentorship offerings.</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="mt-12 px-4">
        <h2 className="text-4xl font-bold text-[#1E3A8A] text-center">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center max-w-3xl mx-auto">
          Real Stories, Real Impact. Discover how FoTI students are shaping the future of tourism with their innovative ideas. Each of these student-driven tourism projects showcases creativity, entrepreneurship, and real-world success.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#1E3A8A]">
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
          </div>

          {/* Story 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#1E3A8A]">
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
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="#"
            className="inline-block bg-[#F97316] text-white py-2 px-6 rounded-md hover:bg-[#F97316]/80 transition duration-300"
          >
            See More Success Stories
          </a>
        </div>
      </section>

      {/* Why FoTI Section */}
      <section id="why-foti" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A] text-left">Why FoTI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          {/* Key Features */}
          <div className="p-4 border rounded-lg flex flex-col items-left">
            <h3 className="font-bold text-left">Innovative Learning Model</h3>
            <p className="text-left">Gain hands-on experience while earning academic credits.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-left">
            <h3 className="font-bold text-left">Revenue from Your Products</h3>
            <p className="text-left">Students create and sell their tour packages, reinvesting in their own development.</p>
          </div>
          <div className="p-4 border rounded-lg flexcatchy words to invite applications to your hospitality school flex-col items-left">
            <h3 className="font-bold text-left">Professional Opportunities</h3>
            <p className="text-left">Graduates can become certified travel agents and compete for postgraduate scholarships.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-left">
            <h3 className="font-bold text-left">Global Exposure</h3>
            <p className="text-left">Promote your tours on our website, social media platforms, and YouTube channel, allowing you to be discovered by employers and partners worldwide.</p>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tour-packages" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A] text-left">Discover Our Student-Created Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Tour Package Card */}
          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <img src="src/assets/IMG-20240328-WA0059.jpg" alt="Safari Adventure" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Safari Adventure</h3>
            <p>A thrilling safari experience awaits you!</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded hover:bg-[#16A34A]/80 transition duration-300">Book Tour</button>
          </div>

          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <img src="src/assets/IMG-20240328-WA0079.jpg" alt="Cultural Immersion" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Cultural Immersion</h3>
            <p>Experience rich cultures and traditions.</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded hover:bg-[#16A34A]/80 transition duration-300">Book Tour</button>
          </div>

          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <img src="src/assets/IMG-20240328-WA0037.jpg" alt="Beach Getaway" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Beach Getaway</h3>
            <p>Relax and unwind at stunning beaches.</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded hover:bg-[#16A34A]/80 transition duration-300">Book Tour</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1E3A8A] text-white text-center py-8 mt-12">
        <h2 className="text-3xl font-bold">Join Us Today!</h2>
        <p className="mt-2">Be a part of something great. Explore your potential with FoTI.</p>
        <button 
          onClick={openModal}
          className="mt-4 bg-[#F97316] py-2 px-4 rounded hover:bg-[#F97316]/80 transition duration-300"
        >
          Join Us
        </button>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <div className="p-4">
          <a href="#about" className="text-[#1E3A8A] hover:text-[#F97316]">About Us</a>
          <span className="mx-2">|</span>
          <a href="#programs" className="text-[#1E3A8A] hover:text-[#F97316]">Programs</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-[#1E3A8A] hover:text-[#F97316]">Contact</a>
        </div>
        <div className="text-gray-500">© 2024 Foundations of Tourism Institute</div>
      </footer>
    </div>
  );
}

export default Home;
