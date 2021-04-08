// Set up MySQL connection.
const mysql = require('mysql');

// Bug with password not populating from .env

const connection = mysql.createConnection({

  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "bb732f0d5ba7b2",
  PASSWORD: "ab163585",
  DB: "heroku_344581484ebadd5"

  // Local envoirnment connection
  // host: 'localhost',
  // port: 3306,
  // user: 'root',
  // password: process.env.DB_PASSWORD,
  // database: 'burger_db'
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log(`
    ✅ Connected to DB as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;