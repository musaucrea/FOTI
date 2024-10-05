// src/components/CreatePackage.jsx

import React, { useState } from 'react';

const CreatePackage = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    description: '',
    destination: '',
    itinerary: '',
    pricing: '',
    inclusions: '',
    exclusions: '',
    multimedia: null,
    documentary: null,
    publication: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API
    console.log(formData);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Create Tour Package</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Package Name</label>
          <input
            type="text"
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        {/* Itinerary Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Itinerary Details</label>
          <textarea
            name="itinerary"
            value={formData.itinerary}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          ></textarea>
        </div>
        {/* Pricing */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Pricing</label>
          <input
            type="number"
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        {/* Inclusions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Inclusions</label>
          <textarea
            name="inclusions"
            value={formData.inclusions}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>
        {/* Exclusions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Exclusions</label>
          <textarea
            name="exclusions"
            value={formData.exclusions}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>
        {/* Multimedia Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Multimedia</label>
          <input
            type="file"
            name="multimedia"
            accept="image/*,video/*,application/pdf"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        {/* Documentary Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Documentary Evidence</label>
          <input
            type="file"
            name="documentary"
            accept="video/*,application/pdf"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        {/* Publication Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Academic Publication Details</label>
          <input
            type="text"
            name="publication"
            value={formData.publication}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Submit Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
