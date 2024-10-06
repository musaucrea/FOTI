// src/components/Research/ResearchProjects.jsx

import React from 'react';

const projects = [
  {
    title: 'Eco-Friendly Practices in Coastal Resorts',
    description: 'Investigating sustainable practices to minimize environmental impact in coastal tourism.',
    lead: 'Dr. Jane Smith',
    status: 'Ongoing',
    link: '#',
  },
  {
    title: 'AI-Driven Tourist Experience Enhancement',
    description: 'Exploring the use of artificial intelligence to personalize and improve tourist experiences.',
    lead: 'Prof. John Doe',
    status: 'Completed',
    link: '#',
  },
  // Add more projects as needed
];

const ResearchProjects = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Current Research Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-[#1E3A8A] pl-4">
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-gray-700 mt-1"><strong>Lead Researcher:</strong> {project.lead}</p>
            <p className="text-gray-700"><strong>Status:</strong> {project.status}</p>
            {project.link && (
              <a href={project.link} className="text-[#F97316] hover:underline mt-2 inline-block">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchProjects;
