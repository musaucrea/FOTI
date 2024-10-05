// src/components/EventsBarChart.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', events: 2 },
  { month: 'Feb', events: 3 },
  { month: 'Mar', events: 1 },
  { month: 'Apr', events: 4 },
  { month: 'May', events: 2 },
  { month: 'Jun', events: 5 },
];

const EventsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="events" fill="#10B981" name="Events" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EventsBarChart;
