// src/pages/Research.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import culturalTourismImg from '../assets/culturalTourism.jpg';
import sustainableTravelImg from '../assets/sustainableTravel.jpg';
import heritagePreservationImg from '../assets/heritagePreservation.jpg';
// Import additional images as needed

const Research = () => {
  const researchData = [
    {
      id: 1,
      title: 'Cultural Tourism in Kenya',
      author: 'Jane Doe',
      image: culturalTourismImg,
      link: '/research/cultural-tourism',
      description:
        'An in-depth study exploring the impact of cultural tourism on local communities and heritage preservation in Kenya.',
    },
    {
      id: 2,
      title: 'Sustainable Travel Practices',
      author: 'John Smith',
      image: sustainableTravelImg,
      link: '/research/sustainable-travel',
      description:
        'Research focused on developing and implementing sustainable travel practices to minimize environmental impact.',
    },
    {
      id: 3,
      title: 'Heritage Preservation Efforts',
      author: 'Alice Johnson',
      image: heritagePreservationImg,
      link: '/research/heritage-preservation',
      description:
        'A comprehensive analysis of strategies for preserving cultural heritage amidst growing tourism demands.',
    },
    // Add more research entries as needed
  ];

  return (
    <div className="bg-foti-gray-light min-h-screen font-montserrat">
      {/* Header Section */}
      <header className="bg-foti-blue text-foti-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl font-serif font-bold">Research & Publications</h1>
          <p className="mt-4 text-xl">
            Explore our students' research and findings through documentaries and publications.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {researchData.map((research) => (
            <div
              key={research.id}
              className="bg-foti-white border border-foti-gray DEFAULT shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foti-blue hover:text-foti-orange transition-colors duration-300">
                  {research.title}
                </h3>
                <p className="text-foti-text mt-2">
                  Published by: <span className="font-semibold">{research.author}</span>
                </p>
                <p className="text-foti-text mt-4">{research.description}</p>
                <Link
                  to={research.link}
                  className="mt-6 inline-block bg-foti-green text-foti-white px-5 py-3 rounded-full hover:bg-foti-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-foti-orange"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Research;
