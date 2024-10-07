// src/pages/Research.jsx
import React from 'react';
import Footer from './components/Footer';
const Research = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Research & Publications</h2>
      <p className="mt-4">Explore our students' research and findings through documentaries and publications.</p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {/* Example of a research entry */}
        <div className="border p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Cultural Tourism in Kenya</h3>
          <p>Published by: Jane Doe</p>
          <button className="mt-4 bg-blue-600 text-white p-2 rounded">Read More</button>
        </div>
        {/* More research entries */}
        <Footer />
      </div>
    </div>
  );
}

export default Research;
