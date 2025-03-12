const express = require('express');
const router = express.Router();

const authRoutes = require('../Controllers/Auth/AuthRoutes');
const userRoutes = require('./userRoutes');

// Use routes
router.use('/', authRoutes);

module.exports = router;
