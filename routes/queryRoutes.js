const express = require('express');
const { submitQuery, getQueries } = require('../controllers/queryController');
const router = express.Router();

// Routes for queries
router.post('/submit', submitQuery);
router.get('/', getQueries);

module.exports = router;
