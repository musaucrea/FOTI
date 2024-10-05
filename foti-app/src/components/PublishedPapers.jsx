// src/components/PublishedPapers.jsx

import React from 'react';

const papers = [
  {
    title: 'Sustainable Tourism Practices in Africa',
    authors: 'Joshua M. Wambui, Jane Doe',
    date: '2024-08-20',
  },
  {
    title: 'Impact of Cultural Festivals on Local Economies',
    authors: 'Joshua M. Wambui, John Smith',
    date: '2024-07-10',
  },
];

const PublishedPapers = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Published Papers</h2>
      <ul className="space-y-4">
        {papers.map((paper, index) => (
          <li key={index} className="border-b pb-2">
            <h3 className="text-lg font-medium">{paper.title}</h3>
            <p className="text-sm text-gray-600">Authors: {paper.authors}</p>
            <p className="text-sm text-gray-600">Published on: {new Date(paper.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishedPapers;
