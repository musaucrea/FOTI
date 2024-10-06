// src/components/Research/Collaborations.jsx

import React from 'react';

const collaborators = [
  {
    name: 'United Nations World Tourism Organization (UNWTO)',
    logo: '/src/assets/logos/unwto.png', // Ensure the logo images are placed correctly
    link: 'https://www.unwto.org/',
  },
  {
    name: 'Global Sustainable Tourism Council (GSTC)',
    logo: '/src/assets/logos/gstc.png',
    link: 'https://www.gstcouncil.org/',
  },
  {
    name: 'International Hotel Association (IHA)',
    logo: '/src/assets/logos/iha.png',
    link: 'https://www.iha.org/',
  },
  // Add more collaborators as needed
];

const Collaborations = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Collaborations & Partnerships</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {collaborators.map((collab, index) => (
          <a 
            key={index} 
            href={collab.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-32 h-32 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img src={collab.logo} alt={`${collab.name} Logo`} className="max-h-full max-w-full object-contain" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Collaborations;
