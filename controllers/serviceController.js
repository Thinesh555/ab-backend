const Service = require('../models/Service');

// Add a new service
const addService = async (req, res) => {
    try {
        const { serviceName, description, rate } = req.body;
        const newService = new Service({ serviceName, description, rate });
        await newService.save();
        res.status(201).json({ message: 'Service added successfully', service: newService });
    } catch (error) {
        console.error('Error adding service:', error);
        res.status(500).json({ error: 'Failed to add service' });
    }
};

// Get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
};

module.exports = { addService, getServices };
