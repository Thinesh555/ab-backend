const Reservation = require('../models/Reservation');

// Create a new reservation
const createReservation = async (req, res) => {
    try {
        const { customerId, serviceType, date, time } = req.body;
        const newReservation = new Reservation({ customerId, serviceType, date, time });
        await newReservation.save();
        res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
};

// Get all reservations
const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('customerId');
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
};

module.exports = { createReservation, getReservations };
