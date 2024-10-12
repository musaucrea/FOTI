// src/pages/FotiVentures.jsx
import React from "react";
import { Link } from "react-router-dom";
import fothinktankImg from "../assets/Amboseli.jpg";
import ecotourismFarmImg from "../assets/Kenya.jpg";
import hackathonsImg from "../assets/Coast.jpg";

const FotiVentures = () => {
  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold">FoTI Ventures</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Pioneering Sustainable Tourism Initiatives with Innovation and Impact
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-6">
          Introduction
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          FoTI Ventures is the strategic arm of the Foundations of Tourism Institute (FoTI), committed to advancing sustainable tourism through creative projects and community-driven solutions. Our mission is to foster positive social, economic, and environmental impacts while equipping students and local communities with hands-on experience.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-gray-100 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          We aim to promote responsible tourism that uplifts communities, preserves cultural heritage, and promotes environmental sustainability. Through our initiatives, FoTI Ventures develops tourism models that benefit both travelers and host regions.
        </p>
      </section>

      {/* Key Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
          Our Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Project Card 1: FoTI Think Tank */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={fothinktankImg}
              alt="FoTI Think Tank"
              className="w-full h-48 object-cover"
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
          </div>

          {/* Project Card 2: Ecotourism Farm */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={ecotourismFarmImg}
              alt="Ecotourism Farm in Kilifi"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Ecotourism Farm in Kilifi</h3>
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
          </div>

          {/* Project Card 3: Hackathons for Innovation */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={hackathonsImg}
              alt="Hackathons for Innovation"
              className="w-full h-48 object-cover"
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 container mx-auto px-4 py-16 text-center">
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
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} FoTI Ventures. All rights reserved.</p>
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
