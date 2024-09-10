const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Handle Contact Form Submission
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
});

module.exports = router;
