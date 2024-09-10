// routes/payment.routes.js
const express = require('express');
const { createPayment, getPayments } = require('../controllers/payment.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authenticate, createPayment);
router.get('/', authenticate, getPayments);

module.exports = router;
