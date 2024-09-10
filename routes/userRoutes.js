// routes/userRoutes.js
const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

// Routes for users
router.post('/register', registerUser);
router.get('/', getAllUsers);

module.exports = router;
