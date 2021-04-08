// Use express router
const express = require('express');
const burgers = require('../models/burger.js');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  // Select all data from the model and assign the values to a variable.
  burgers.selectAll((data) => {
    const hbsObject = {
      burger: data,
    };

    // Response is rendered with the handlebars object showing all burgers.
    res.render('index', hbsObject);
  });
});

router.post('/api/burger', (req, res) => {
  // Get data from front end and assign to variable
  // eslint-disable-next-line camelcase
  const { burger_name, devoured } = req.body;

  burgers.insertOne({
    burger_name,
    devoured,
  }, () => {
    // Redirect to home page
    res.redirect('/');
  });
});

router.put('/api/burger/:id', (req, res) => {
  const condition = req.params.id;
  const { devoured } = req.body;

  burgers.updateOne({
    devoured,
  }, condition, () => {
    res.redirect('/');
  });
});

module.exports = router;
