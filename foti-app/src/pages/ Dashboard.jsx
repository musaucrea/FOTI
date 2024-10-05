
// src/components/Dashboard.jsx

import React from 'react';
import SummaryCard from './SummaryCard';
import TripsPieChart from './TripsPieChart';
import EventsBarChart from './EventsBarChart';
import UpcomingEvents from './UpcomingEvents';
import PublishedPapers from './PublishedPapers';
import { FaSuitcase, FaCalendarAlt, FaFileAlt, FaBell } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-2xl font-bold">FoTI</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Profile</a>
          <button className="hover:underline">Logout</button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 hidden md:block">
          <nav className="space-y-2">
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded">
              <FaSuitcase className="mr-2" /> Dashboard
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded">
              <FaCalendarAlt className="mr-2" /> My Trips
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded">
              <FaBell className="mr-2" /> Events
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded">
              <FaFileAlt className="mr-2" /> Publications
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded">
              <FaBell className="mr-2" /> Create Package
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <SummaryCard
              icon={<FaSuitcase size={24} />}
              title="Trips Made"
              value="10"
              progress={50}
              color="blue"
            />
            <SummaryCard
              icon={<FaCalendarAlt size={24} />}
              title="Upcoming Trips"
              value="3"
              progress={15}
              color="green"
            />
            <SummaryCard
              icon={<FaFileAlt size={24} />}
              title="Published Papers"
              value="5"
              progress={25}
              color="brown"
            />
            <SummaryCard
              icon={<FaBell size={24} />}
              title="FoTI Events"
              value="2"
              progress={10}
              color="orange"
            />
          </div>

          {/* Data Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Trips Overview</h2>
              <TripsPieChart />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <EventsBarChart />
            </div>
          </div>

          {/* Upcoming Events & Published Papers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UpcomingEvents />
            <PublishedPapers />
          </div>

          {/* Create Tour Package Button */}
          <div className="mt-6">
            <button
              className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
              onClick={() => window.location.href = '/create-package'}
            >
              Create Tour Package
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-blue-600 text-white text-center">
        &copy; {new Date().getFullYear()} FoTI. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;

export default Dashboard;
