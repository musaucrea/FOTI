// src/components/UpcomingEvents.jsx

import React from 'react';

const events = [
  {
    title: 'Tourism Innovation Workshop',
    date: '2024-11-15',
    description: 'A workshop on innovative tourism product development.',
  },
  {
    title: 'Cultural Exchange Program',
    date: '2024-12-01',
    description: 'Exchange program with international tourism institutes.',
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Upcoming FoTI Events</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="border-b pb-2">
            <h3 className="text-lg font-medium">{event.title}</h3>
            <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
