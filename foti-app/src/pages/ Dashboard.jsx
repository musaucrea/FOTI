
// src/components/Dashboard.jsx

// Dashboard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SummaryCard from './SummaryCard';
import TripsPieChart from './TripsPieChart';
import EventsBarChart from './EventsBarChart';
import UpcomingEvents from './UpcomingEvents';
import PublishedPapers from './PublishedPapers';
import {
  FaSuitcase,
  FaCalendarAlt,
  FaFileAlt,
  FaBell,
  FaPlus,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-2xl font-bold">FoTI</div>
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            <button className="hover:underline" onClick={() => navigate('/logout')}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-gray-100 p-4 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:block`}
        >
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded"
            >
              <FaSuitcase className="mr-2" size={20} /> Dashboard
            </Link>
            <Link
              to="/my-trips"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded"
            >
              <FaCalendarAlt className="mr-2" size={20} /> My Trips
            </Link>
            <Link
              to="/events"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded"
            >
              <FaBell className="mr-2" size={20} /> Events
            </Link>
            <Link
              to="/publications"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded"
            >
              <FaFileAlt className="mr-2" size={20} /> Publications
            </Link>
            <Link
              to="/create-package"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-200 rounded"
            >
              <FaPlus className="mr-2" size={20} /> Create Package
            </Link>
          </nav>
        </aside>

        {/* Overlay for Mobile when Sidebar is Open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          ></div>
        )}

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
              color="yellow" // Changed from "brown" to "yellow"
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
            <Link to="/create-package">
              <button className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600">
                Create Tour Package
              </button>
            </Link>
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
