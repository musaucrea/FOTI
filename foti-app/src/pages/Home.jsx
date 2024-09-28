// src/pages/Home.jsx
//import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <div className="text-3xl font-bold text-[#1E3A8A]">FoTI</div>
        <nav className="space-x-4">
          <a href="#programs" className="text-[#1E3A8A] hover:text-[#F97316]">Programs</a>
          <a href="#tour-packages" className="text-[#1E3A8A] hover:text-[#F97316]">Tour Packages</a>
          <a href="#contact" className="text-[#1E3A8A] hover:text-[#F97316]">Contact</a>
          <button className="bg-[#16A34A] text-white py-2 px-4 rounded hover:bg-[#F97316]">Join Us</button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="mt-8">
        <img src="path/to/hero-image.jpg" alt="Tourism" className="w-full h-auto rounded-lg"/>
        <div className="absolute text-center inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Welcome to Foundations of Tourism Institute</h1>
          <button className="mt-4 bg-[#F97316] text-white py-2 px-4 rounded">Start Your Journey</button>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">About Us</h2>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2 p-4">
            <p className="text-lg">
              FoTI facilitates tourism students in researching, creating, and selling tourism products.
              Every tour package promoted has two expected outputs: a documentary and an academic publication.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="path/to/about-image.jpg" alt="Students in action" className="rounded-lg"/>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Program Card */}
          <div className="bg-[#F97316] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">Undergraduate Programs</h3>
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
      <section id="success-stories" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Student Success Stories</h2>
        <div className="mt-4">
          {/* Add a carousel or grid for stories */}
        </div>
      </section>

      {/* Why FoTI Section */}
      <section id="why-foti" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Why Choose FoTI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          {/* Key Features */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Research</h3>
            <p>Engage in hands-on research opportunities.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Innovation</h3>
            <p>Explore innovative solutions in tourism.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Networking</h3>
            <p>Build connections with industry leaders.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Career Development</h3>
            <p>Access resources for career advancement.</p>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tour-packages" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Explore Our Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Tour Package Card */}
          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <h3 className="text-lg font-bold">Safari Adventure</h3>
            <p>A thrilling safari experience awaits you!</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded">Explore Tour</button>
          </div>
          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <h3 className="text-lg font-bold">Cultural Immersion</h3>
            <p>Experience rich cultures and traditions.</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded">Explore Tour</button>
          </div>
          <div className="bg-[#60A5FA] p-4 rounded-lg">
            <h3 className="text-lg font-bold">Beach Getaway</h3>
            <p>Relax and unwind at stunning beaches.</p>
            <button className="mt-2 bg-[#16A34A] text-white py-2 px-4 rounded">Explore Tour</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1E3A8A] text-white text-center py-8 mt-12">
        <h2 className="text-3xl font-bold">Join Us Today!</h2>
        <p className="mt-2">Be a part of something great. Explore your potential with FoTI.</p>
        <button className="mt-4 bg-[#F97316] py-2 px-4 rounded">Join Us</button>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <div className="p-4">
          <a href="#about" className="text-[#1E3A8A]">About Us</a>
          <span className="mx-2">|</span>
          <a href="#programs" className="text-[#1E3A8A]">Programs</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-[#1E3A8A]">Contact</a>
        </div>
        <div className="text-gray-500">© 2024 Foundations of Tourism Institute</div>
      </footer>
    </div>
  );
}

export default Home;

