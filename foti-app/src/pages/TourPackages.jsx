// src/pages/TourPackages.jsx
import React from 'react';

const TourPackages = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Tour Packages</h2>
      <p className="mt-4">
        View and explore student-developed tour packages that combine innovation and academic research.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Example of a package card */}
        <div className="border p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Safari Adventure</h3>
          <p className="mt-2">A thrilling safari experience curated by students, combining wildlife exploration with eco-tourism principles.</p>
          <button className="mt-4 bg-blue-600 text-white p-2 rounded">Learn More</button>
        </div>
        {/* More packages */}
      </div>
    </div>
  );
}

export default TourPackages;
