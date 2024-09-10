const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Handle Reservation Submission
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting reservation', error });
  }
});

module.exports = router;
