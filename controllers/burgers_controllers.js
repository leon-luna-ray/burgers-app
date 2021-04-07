const express = require('express');
// const db = require('../models')
const router = express.Router();

const burgers = require('../models/burger.js');


// Routes
// This will need to hit the database to get info to hand to handlebars
router.get('/', (req, res) => {

    // Select all data from the model and assign the values to a variable.
    burgers.selectAll(data => {
        const hbsObject = {
          burger: data
        };
        
        // Response is rendered with the handlebars object showing all burgers.
        res.render("index", hbsObject);
      });

});

router.post('/api/burger', (req, res) => {
    // Get data from front end and assign to variable
    const {burger_name, devoured} = req.body;
    console.log(`Devoured from post route: ${devoured}`)
    burgers.insertOne({
        burger_name,
        devoured, 
    }, () => {
        // Redirect to home page
        console.log(`Devoured 2 from post route: ${devoured}`)
        res.redirect('/');
    })
});

router.put('/api/burger/:id', (req, res) => {
    const devoured = req.params.devoured;
    console.log(devoured);
});



module.exports = router;