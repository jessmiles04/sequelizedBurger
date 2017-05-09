//mysql connection dependencies
var mysql = require('mysql');

//actual connection variable
//var connection;

//connection on localhost
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'D@zy2012',
    database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//Connection for ORM
module.exports = connection;