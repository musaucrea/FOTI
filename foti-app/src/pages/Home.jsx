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
    <button className="mt-6 bg-[#F97316] text-white py-2 px-6 rounded hover:bg-[#F97316]/80 transition duration-300">
      Start Your Journey
    </button>
  </div>
</div>


      {/* About Us Section */}
      <section id="about" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">About us </h2>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2 p-4">
            <p className="text-lg">FoTI empowers tourism students to research, create, and sell products. Approved tour packages must deliver a documentary and academic publication. Students manage business operations alongside their studies, with minimal supervision, and profits fund further research.

Research is shared through YouTube documentaries and the FoTI Journal. Their work is featured on the FoTI website and social media for potential job opportunities. Graduates can join FoTI's Travel Agency for Hire, become certified agents, or compete for scholarships. Top postgraduates may join the FoTI Think Tank as tourism researchers.

            </p>
          </div>
          <div className="md:w-1/2">
            <img src="src/assets/tourist students.png" alt="Students in action" className="rounded-lg"/>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Programs</h2>
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
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Why FoTI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          {/* Key Features */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Innovative Learning Model</h3>
            <p>Gain hands-on experience while earning academic credits.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Revenue from Your Products</h3>
            <p>Students create and sell their tourism products, reinvesting in their own development.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Professional Opportunities</h3>
            <p>Graduates can become certified travel agents and compete for postgraduate scholarships.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Global Exposure</h3>
            <p>Promote your tours on our website, social media platforms, and YouTube channel, allowing you to be discovered by employers and partners worldwide.
</p>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tour-packages" className="mt-12">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Discover Our Student-Created Tours</h2>
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

