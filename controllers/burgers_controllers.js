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

    burgers.selectAll(data => {
        const hbsObject = {
          burger: data
        };
        
        console.log(hbsObject)
        res.render("index", hbsObject);
      });

});

router.post('/api/burger', (req, res) => {
    // Get data from front end and assign to variable
    const {burger_name, devoured} = req.body;
    burgers.insertOne({
        burger_name,
        devoured, 
    }, (result) => {
        // res.json(result);
        console.log(result)
        res.redirect('/')
    })

    console.log(`${burger_name} order recived in the back!`)

    // res.status(200);
})

module.exports = router;