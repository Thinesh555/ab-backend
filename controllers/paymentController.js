// controllers/payment.controller.js
const Payment = require('../models/payment.model');
const Reservation = require('../models/Reservation');

exports.createPayment = async (req, res) => {
  try {
    const { reservationId, amount, paymentMethod } = req.body;
    const payment = await Payment.create({ reservationId, amount, paymentMethod });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ include: [Reservation] });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
