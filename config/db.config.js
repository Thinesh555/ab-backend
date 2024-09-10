// db.config.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  // Connection String to MongoDB
  url: process.env.MONGODB_URI || 'mongodb+srv://vkrtinsh:3sPQFViWIhJBlQaE@cluster0.e24xm.mongodb.net/', 

  options: {
    useNewUrlParser: true,   // Uses new URL parser, a more stable option
    useUnifiedTopology: true, // Use MongoDB's new unified topology layer
    useCreateIndex: true,     // Creates indexes automatically
    useFindAndModify: false,  // Opts out of using `findAndModify()`
    poolSize: 10,             // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if server is not found
    socketTimeoutMS: 45000,   // Close sockets after 45 seconds of inactivity
  }
};

// Function to Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options);
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
