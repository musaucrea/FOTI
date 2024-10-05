// src/components/TripsPieChart.jsx

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Beach Destinations', value: 40 },
  { name: 'Cultural Tours', value: 30 },
  { name: 'Adventure Trips', value: 20 },
  { name: 'City Tours', value: 10 },
];

const COLORS = ['#4F46E5', '#10B981', '#D97706', '#EF4444'];

const TripsPieChart = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TripsPieChart;
