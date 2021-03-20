require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

// Serve static content from public
app.use(express.static('public'));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
const exphbs = require('express-handlebars');

// May need to change the file path with layouts
app.engine('handlebars', exphbs({ 
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const routes = require('./controllers/burgers_controllers');

app.use(routes);

// Start server
app.listen(PORT, () => {
    console.log(`
    📡 The app is listening on PORT ${PORT}.`)
});