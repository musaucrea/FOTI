require('dotenv').config();
// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dashboardRoutes = require('./routes/dashboard');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use the dashboard routes
app.use('/api/dashboard', dashboardRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
