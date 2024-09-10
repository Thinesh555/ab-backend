const express = require('express');
const { addService, getServices } = require('../controllers/serviceController');
const router = express.Router();

// Routes for services
router.post('/add', addService);
router.get('/', getServices);

module.exports = router;
