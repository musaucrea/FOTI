// src/components/Research/Opportunities.jsx

import React from 'react';

const opportunities = [
  {
    title: 'Research Assistant Positions',
    description: 'Assist faculty members in ongoing research projects and gain valuable experience.',
    eligibility: 'Currently enrolled in a master’s program.',
    link: '#',
  },
  {
    title: 'FoTI Research Scholarships',
    description: 'Scholarships available for exceptional research proposals in sustainable tourism.',
    eligibility: 'Open to both domestic and international students.',
    link: '#',
  },
  {
    title: 'Internship Program',
    description: 'Gain hands-on experience with our industry partners.',
    eligibility: 'Undergraduate students with a strong academic record.',
    link: '#',
  },
  // Add more opportunities as needed
];

const Opportunities = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Student & Researcher Opportunities</h2>
      <div className="space-y-6">
        {opportunities.map((opp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{opp.title}</h3>
            <p className="text-gray-600 mt-2">{opp.description}</p>
            <p className="text-gray-700 mt-1"><strong>Eligibility:</strong> {opp.eligibility}</p>
            {opp.link && (
              <a href={opp.link} className="text-[#F97316] hover:underline mt-2 inline-block">
                Apply Now
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;

