const express = require('express');
const Trip = require('../models/Trip');
const Event = require('../models/Event');
const Paper = require('../models/Paper');

const router = express.Router();

// GET /api/dashboard/summary
router.get('/summary', async (req, res) => {
  try {
    const tripsMade = await Trip.countDocuments({ status: 'completed' });
    const upcomingTrips = await Trip.countDocuments({ status: 'upcoming' });
    const publishedPapers = await Paper.countDocuments();
    const fotiEvents = await Event.countDocuments();

    res.json({ tripsMade, upcomingTrips, publishedPapers, fotiEvents });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/dashboard/trips-overview
router.get('/trips-overview', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/dashboard/events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
