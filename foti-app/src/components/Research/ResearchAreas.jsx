// src/components/Research/ResearchAreas.jsx

import React from 'react';

const researchAreas = [
  {
    title: 'Sustainable Tourism',
    description: 'Developing eco-friendly tourism practices that balance environmental, economic, and social factors.',
    icon: '🌿',
  },
  {
    title: 'Cultural Heritage',
    description: 'Preserving and promoting cultural heritage through tourism initiatives.',
    icon: '🏛️',
  },
  {
    title: 'Tourism Economics',
    description: 'Analyzing the economic impacts of tourism on local and global scales.',
    icon: '💰',
  },
  {
    title: 'Digital Transformation',
    description: 'Leveraging technology to enhance tourism experiences and operations.',
    icon: '💻',
  },
];

const ResearchAreas = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Research Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">{area.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
            <p className="text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchAreas;
