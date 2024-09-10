const Query = require('../models/Query');

// Submit a new query
const submitQuery = async (req, res) => {
    try {
        const { customerId, message } = req.body;
        const newQuery = new Query({ customerId, message });
        await newQuery.save();
        res.status(201).json({ message: 'Query submitted successfully', query: newQuery });
    } catch (error) {
        console.error('Error submitting query:', error);
        res.status(500).json({ error: 'Failed to submit query' });
    }
};

// Get all queries
const getQueries = async (req, res) => {
    try {
        const queries = await Query.find().populate('customerId');
        res.json(queries);
    } catch (error) {
        console.error('Error fetching queries:', error);
        res.status(500).json({ error: 'Failed to fetch queries' });
    }
};

module.exports = { submitQuery, getQueries };
