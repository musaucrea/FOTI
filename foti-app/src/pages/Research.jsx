// src/pages/Research.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
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
    <div className="bg-gray-50 min-h-screen font-montserrat">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold">Research & Publications</h1>
          <p className="mt-4 text-lg">
            Explore our students' research and findings through documentaries and publications.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map((research) => (
            <div
              key={research.id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">{research.title}</h3>
                <p className="text-gray-600 mt-2">Published by: {research.author}</p>
                <p className="text-gray-700 mt-4">{research.description}</p>
                <Link
                  to={research.link}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600/90 transition-colors duration-300"
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
