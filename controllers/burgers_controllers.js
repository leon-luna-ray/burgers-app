const express = require('express');
// const db = require('../models')
const router = express.Router();

const burgers = require('../models/burger.js');


// Routes
// This will need to hit the database to get info to hand to handlebars
router.get('/', (req, res) => {
    console.log(`
    📥 Get request recieved!
    `);
    res.render('index');

});

router.post('/api/burger', async (req, res) => {
    // Get data from front end and assign to variable
    const {burger_name, devoured} = req.body;
    const newOrder = await burgers.insertOne({
        burger_name,
        devoured, 
    });

    console.log(`${burger_name} order recived in the back!`)

    res.status(200);
})

module.exports = router;