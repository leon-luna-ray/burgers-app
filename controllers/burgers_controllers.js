const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

// Routes
router.get('/', (req, res) => {
    console.log('📥 Get request recieved!');

});

module.exports = router;