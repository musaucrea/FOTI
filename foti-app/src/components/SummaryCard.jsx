// src/components/SummaryCard.jsx

import React from 'react';

const SummaryCard = ({ icon, title, value, progress, color }) => {
  const colorClass = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    brown: 'bg-yellow-700',
    orange: 'bg-orange-500',
  }[color] || 'bg-blue-500';

  return (
    <div className="flex items-center p-4 bg-white rounded shadow">
      <div className={`p-3 rounded-full text-white ${colorClass}`}>
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`${colorClass} h-2 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
