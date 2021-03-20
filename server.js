require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content from public
app.use(express.static('public'));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const routes = require('./controllers/burgers_controllers');

app.use(routes);

// Start server
app.listen(PORT, () => {
    console.log(`
        📡 The app is listening on PORT ${PORT}.
    `)
});