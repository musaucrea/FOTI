// src/components/Research/Publications.jsx

import React from 'react';

const publications = [
  {
    title: 'The Role of Technology in Sustainable Tourism',
    authors: ['Dr. Jane Smith', 'Prof. John Doe'],
    journal: 'Journal of Sustainable Tourism',
    year: 2023,
    link: '#',
  },
  {
    title: 'Cultural Heritage and Community Engagement',
    authors: ['Prof. Michael Brown'],
    journal: 'Tourism and Heritage Preservation',
    year: 2022,
    link: '#',
  },
  // Add more publications as needed
];

const Publications = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{pub.title}</h3>
            <p className="text-gray-600 mt-2"><strong>Authors:</strong> {pub.authors.join(', ')}</p>
            <p className="text-gray-700"><strong>Journal:</strong> {pub.journal}, {pub.year}</p>
            {pub.link && (
              <a href={pub.link} className="text-[#F97316] hover:underline mt-2 inline-block">
                Read Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
