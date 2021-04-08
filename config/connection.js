// Set up MySQL connection.
const mysql = require('mysql');

let connection;

// Connection will use jawsdb for production or local for development
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'burger_db',
  });
}
// Make connection
connection.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`error connecting: ' + ${err.stack}`);
    return;
  }
  // eslint-disable-next-line no-console
  console.log(`
    ✅ Connected to DB as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
