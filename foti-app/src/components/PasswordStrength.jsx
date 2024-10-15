// src/components/PasswordStrength.jsx
import React from 'react';

const PasswordStrength = ({ password }) => {
  const calculateStrength = () => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const strength = calculateStrength();

  const strengthLabel = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Moderate';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const strengthColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-foiGreen';
      case 4:
        return 'bg-foiBrown';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="mt-2">
      <div className="w-full bg-gray-300 rounded h-2">
        <div
          className={`h-2 rounded ${strengthColor()}`}
          style={{ width: `${(strength / 4) * 100}%` }}
        ></div>
      </div>
      {password && (
        <p className={`text-sm mt-1 ${strengthColor()}`}>{strengthLabel()}</p>
      )}
    </div>
  );
};

export default PasswordStrength;

