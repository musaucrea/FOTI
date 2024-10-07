// src/pages/FotiVentures.jsx
import React from "react";
import { Link } from "react-router-dom";

const FotiVentures = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-[#1E3A8A] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">FoTI Ventures</h1>
          <p className="mt-2 text-lg">
            Pioneering Sustainable Tourism Initiatives
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          FoTI Ventures is a strategic arm of the Foundations of Tourism Institute (FoTI) dedicated to promoting sustainable tourism through innovative projects and community engagement. Our initiatives aim to create positive social, economic, and environmental impacts while providing experiential learning opportunities for students and actively involving local communities.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-white container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-4">
          Mission Statement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to foster responsible tourism practices that empower local communities, enhance cultural heritage, and promote environmental stewardship. Through our diverse projects, FoTI Ventures seeks to develop sustainable tourism models that benefit both travelers and the regions they visit.
        </p>
      </section>

      {/* Key Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8">
          Our Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1: FoTI Think Tank */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
              FoTI Think Tank
            </h3>
            <p className="text-gray-700 mb-4">
              A collaborative platform bringing together students, researchers, and industry experts to address challenges in the tourism sector and generate innovative solutions.
            </p>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Activities:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Conducting research on current tourism trends and issues.</li>
              <li>Organizing workshops and seminars for knowledge sharing.</li>
              <li>Developing strategic recommendations for policymakers.</li>
            </ul>
            <Link
              to="/ventures/fothinktank"
              className="inline-block bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]/90 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Project Card 2: FoTI Ecotourism Farm */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
              FoTI Ecotourism Farm in Kilifi
            </h3>
            <p className="text-gray-700 mb-4">
              A sustainable accommodation model that minimizes ecological footprints while offering unique experiences to tourists through organic farming and eco-friendly practices.
            </p>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Activities:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Developing a farm-to-table dining experience.</li>
              <li>Implementing water recycling systems.</li>
              <li>Partnering with suppliers for recycling initiatives.</li>
            </ul>
            <Link
              to="/ventures/ecotourismfarm"
              className="inline-block bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]/90 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Project Card 3: Hackathons for Innovation */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
              Hackathons for Innovation
            </h3>
            <p className="text-gray-700 mb-4">
              Organizing hackathons to harness creativity and technology in addressing challenges within the tourism sector, fostering innovative solutions and community collaboration.
            </p>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Activities:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Hosting collaborative events for students and community members.</li>
              <li>Encouraging the development of tech-driven solutions.</li>
              <li>Providing mentorship and resources for project development.</li>
            </ul>
            <Link
              to="/ventures/hackathons"
              className="inline-block bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#1E3A8A]/90 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-4">
          Get Involved
        </h2>
        <p className="text-gray-700 mb-6">
          Join us in our mission to promote sustainable tourism. Whether you're a student, community member, or industry professional, there's a place for you at FoTI Ventures.
        </p>
        <Link
          to="/contact"
          className="bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#1E3A8A]/90 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1E3A8A] text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} FoTI Ventures. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="mx-2 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="mx-2 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FotiVentures;
