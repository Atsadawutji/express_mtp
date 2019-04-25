var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root123456',
    database : 'revelsoft_erp_mtp'
});

connection.connect();

module.exports = connection;