const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

// Routes
router.get('/', (req, res) => {
    console.log(`
    📥 Get request recieved!
    `);
    // res.render('index', {layout: main});

});

module.exports = router;