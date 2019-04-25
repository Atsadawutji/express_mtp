const express = require('express')
const app = express()
var bodyParser = require('body-parser');
//const db = require('./db')
// var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root123456',
//     database : 'revelsoft_erp_mtp'
// });

// connection.connect();




// connection.end();
app.get('/', (req, res) => {
  res.send('Hello World')
})


// app.get('/user/', (req, res) => {
//   connection.query("SELECT * FROM tb_user", function (err, re) {             
//     if(err) {
//         console.log("error: ", err);
//         //result(err, null);
//     }
//     else{
//         //result(null, res);
//         //console.log("sss: ", re);
//         res.json(re)
//     }
//   });   
//   //res.send('Hello World')
// })


app.listen(3000, () => {
  console.log('API Start server at port 3000.')
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var appRoutes = require('./routes/approutes');
appRoutes(app); //register the route