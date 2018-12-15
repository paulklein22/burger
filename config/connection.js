const mysql = require("mysql");

///////////////////////////////////////////////////////////
// Hide password
//////////////////////////////////////////////////////////
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Skyholo22*",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
