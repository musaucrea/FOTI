import React, { useState } from 'react';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    let strengthScore = 0;

    // Check length
    if (password.length >= 8) strengthScore++;
    // Check for numbers
    if (/[0-9]/.test(password)) strengthScore++;
    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) strengthScore++;
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strengthScore++;

    switch (strengthScore) {
      case 0:
      case 1:
        setStrength('Very Weak');
        break;
      case 2:
        setStrength('Weak');
        break;
      case 3:
        setStrength('Moderate');
        break;
      case 4:
        setStrength('Strong');
        break;
      default:
        setStrength('');
    }
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div className="mb-4">
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className={`mt-2 text-sm font-bold ${strength === 'Very Weak' ? 'text-red-500' : strength === 'Weak' ? 'text-orange-500' : strength === 'Moderate' ? 'text-yellow-500' : strength === 'Strong' ? 'text-green-500' : ''}`}>
        {strength}
      </div>
    </div>
  );
};

export default PasswordStrength;
