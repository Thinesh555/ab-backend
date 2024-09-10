const mongoose = require('mongoose');

// Define the schema for a reservation
const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  specialRequests: { type: String }
});

// Create the model
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
