const express = require('express');
// const db = require('../models')
const router = express.Router();


const burgerDb = require('../models/burger.js');


// Routes
// This will need to hit the database to get info to hand to handlebars
router.get('/', (req, res) => {
    console.log(`
    📥 Get request recieved!
    `);
    res.render('index');

});

router.post('/api/burger', (req, res) => {

    console.log(`${req.body.burger_name} order recived in the back!`)
})

module.exports = router;