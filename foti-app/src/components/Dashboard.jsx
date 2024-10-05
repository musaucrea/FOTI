// src/components/Dashboard.jsx

// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FaSuitcase, FaCalendarAlt, FaClipboardList, FaUsers } from 'react-icons/fa';

// Sample data for pie chart (replace this with your actual data)
const data = [
  { name: 'Completed Trips', value: 12 },
  { name: 'Upcoming Trips', value: 8 },
];

// Define colors for the pie chart
const COLORS = ['#4CAF50', '#FF9800'];

const Dashboard = () => {
  const [tripsMade, setTripsMade] = useState(0);
  const [upcomingTrips, setUpcomingTrips] = useState(0);
  const [publishedPapers, setPublishedPapers] = useState(0);
  const [fotiEvents, setFotiEvents] = useState(0);
  const [tripsData, setTripsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Fetch summary data
    axios.get('/api/dashboard/summary')
      .then(response => {
        setTripsMade(response.data.tripsMade);
        setUpcomingTrips(response.data.upcomingTrips);
        setPublishedPapers(response.data.publishedPapers);
        setFotiEvents(response.data.fotiEvents);
      })
      .catch(error => console.error(error));

    // Fetch trips overview data
    axios.get('/api/dashboard/trips-overview')
      .then(response => setTripsData(response.data))
      .catch(error => console.error(error));

    // Fetch events data
    axios.get('/api/dashboard/events')
      .then(response => setEventsData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          icon={<FaSuitcase size={24} />}
          title="Trips Made"
          value={tripsMade}
          progress={(tripsMade / 20) * 100} // Example progress
          color="blue"
        />
        <SummaryCard
          icon={<FaCalendarAlt size={24} />}
          title="Upcoming Trips"
          value={upcomingTrips}
          progress={(upcomingTrips / 10) * 100} // Example progress
          color="orange"
        />
        <SummaryCard
          icon={<FaClipboardList size={24} />}
          title="Published Papers"
          value={publishedPapers}
          progress={(publishedPapers / 5) * 100} // Example progress
          color="green"
        />
        <SummaryCard
          icon={<FaUsers size={24} />}
          title="FoTI Events"
          value={fotiEvents}
          progress={(fotiEvents / 3) * 100} // Example progress
          color="purple"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Trips Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Upcoming FoTI Events</h3>
        <ul className="list-disc pl-5">
          {eventsData.map(event => (
            <li key={event.id} className="mb-2">{event.title} on {new Date(event.date).toLocaleDateString()}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Published Papers</h3>
        <ul className="list-disc pl-5">
          {tripsData.map(paper => (
            <li key={paper.id} className="mb-2">{paper.title} by {paper.author}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          Create Tour Package
        </button>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, title, value, progress, color }) => {
  return (
    <div className={`p-4 bg-${color}-200 rounded shadow-md`}>
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      <div className="mt-2">
        <div className={`h-2 bg-${color}-600`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Dashboard;
