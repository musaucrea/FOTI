// src/components/Research/Impact.jsx

import React from 'react';

const impactStories = [
  {
    title: 'Sustainable Practices in Bali’s Tourism Sector',
    description: 'Implementation of eco-friendly practices reduced the environmental footprint by 30% and increased local employment.',
    type: 'Case Study',
    link: '#',
  },
  {
    title: 'AI-Driven Recommendation System Enhances Tourist Satisfaction',
    description: 'Developed an AI-driven system that improved tourist satisfaction rates by 25%.',
    type: 'Impact Story',
    link: '#',
  },
  // Add more impact stories as needed
];

const Impact = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Research Impact</h2>
      <div className="space-y-6">
        {impactStories.map((story, index) => (
          <div key={index} className="border-l-4 border-[#1E3A8A] pl-4">
            <h3 className="text-2xl font-semibold text-gray-800">{story.title}</h3>
            <p className="text-gray-600 mt-2"><strong>Type:</strong> {story.type}</p>
            <p className="text-gray-700 mt-1">{story.description}</p>
            {story.link && (
              <a href={story.link} className="text-[#F97316] hover:underline mt-2 inline-block">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;

