// seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Trip = require('./models/Trip');
const Event = require('./models/Event');
const Paper = require('./models/Paper');

dotenv.config();

const sampleTrips = [
  {
    title: "Safari Adventure",
    description: "Explore the wild and experience the Big Five.",
    destination: "Nairobi",
    price: 500,
    date: new Date('2024-12-01'),
    participants: 10,
    status: "completed",
    createdBy: "60c72b2f9b1e8e3d2c8f9b1e" // Replace with actual User ID
  },
  {
    title: "Cultural Tour",
    description: "Discover the rich culture and history of Kenya.",
    destination: "Mombasa",
    price: 300,
    date: new Date('2024-11-20'),
    participants: 5,
    status: "upcoming",
    createdBy: "60c72b2f9b1e8e3d2c8f9b1e" // Replace with actual User ID
  }
];

const sampleEvents = [
  {
    title: "FoTI Annual Conference",
    date: new Date('2024-11-15'),
    location: "Weston Hotel, Nairobi",
    description: "Join us for the annual conference on tourism trends.",
    attendees: 100
  },
  {
    title: "Tourism Workshop",
    date: new Date('2024-12-05'),
    location: "Conference Center, Mombasa",
    description: "A workshop focused on sustainable tourism practices.",
    attendees: 50
  }
];

const samplePapers = [
  {
    title: "Impact of Tourism on Local Communities",
    author: "John Doe",
    publishedDate: new Date('2024-08-30'),
    abstract: "This paper explores the effects of tourism on local economies and cultures."
  },
  {
    title: "Sustainable Tourism Practices in Africa",
    author: "Jane Smith",
    publishedDate: new Date('2024-09-15'),
    abstract: "An in-depth analysis of sustainable tourism initiatives across African countries."
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    // Clear existing data
    await Trip.deleteMany();
    await Event.deleteMany();
    await Paper.deleteMany();

    // Insert sample data
    await Trip.insertMany(sampleTrips);
    await Event.insertMany(sampleEvents);
    await Paper.insertMany(samplePapers);

    console.log('Sample data inserted successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
}

seedDatabase();

