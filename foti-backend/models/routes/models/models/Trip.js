// models/Trip.js

const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  participants: { type: Number, default: 0 },
  status: { type: String, enum: ['completed', 'upcoming'], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', TripSchema);
