// backend/database.js
const mysql = require('mysql2');

// Create a connection to the database (MySQL example)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',  // Your DB username
  password: 'abud',  // Your DB password
  database: 'real_estate',  // Your DB name
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;  // Export the db connection
