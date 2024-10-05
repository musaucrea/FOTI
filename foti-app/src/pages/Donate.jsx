// src/pages/Donate.jsx

import React from 'react';

const Donate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Donate to FOTI</h1>
        <p className="text-gray-700 mb-6">
          Your generous donations help us provide quality education and opportunities to our students. Thank you for your support!
        </p>
        {/* Donation Form or Information */}
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 w-full">
          Make a Donation
        </button>
      </div>
    </div>
  );
};

export default Donate;
