const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

// Routes
// This will need to hit the database to get info to hand to handlebars
router.get('/', (req, res) => {
    console.log(`
    📥 Get request recieved!
    `);
    res.render('index');

});

module.exports = router;