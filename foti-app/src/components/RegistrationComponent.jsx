import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationComponent = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    degreeProgram: '',
    graduationYear: '',
    currentlyStudying: false,
  });

  const navigate = useNavigate();

  // Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual registration API endpoint
      const response = await axios.post('/api/register', formData);
      
      if (response.status === 200 || response.status === 201) {
        // Registration successful
        closeModal();
        navigate('/dashboard'); // Redirect to Dashboard
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
      // Optionally, handle specific error messages
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          {/* Student Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700">Student Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          {/* University */}
          <div>
            <label htmlFor="university" className="block text-gray-700">University</label>
            <input 
              type="text" 
              id="university" 
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          {/* Degree Program */}
          <div>
            <label htmlFor="degreeProgram" className="block text-gray-700">Degree Program</label>
            <input 
              type="text" 
              id="degreeProgram" 
              name="degreeProgram"
              value={formData.degreeProgram}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          {/* Year of Graduation */}
          <div>
            <label htmlFor="graduationYear" className="block text-gray-700">Year of Graduation</label>
            <input 
              type="number" 
              id="graduationYear" 
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
              min="1900"
              max="2100"
            />
          </div>

          {/* Currently Studying */}
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="currentlyStudying" 
              name="currentlyStudying"
              checked={formData.currentlyStudying}
              onChange={handleChange}
              className="h-4 w-4 text-[#1E3A8A] border-gray-300 rounded"
            />
            <label htmlFor="currentlyStudying" className="ml-2 text-gray-700">
              Currently Studying
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit"
              className="w-full bg-[#1E3A8A] text-white py-2 px-4 rounded hover:bg-[#F97316] transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationComponent;

