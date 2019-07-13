var mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.56.10",
    port: "3306",
    user: "user",
    password: "password",
    database: "db"
});

con.connect(function (err) {
    if (err) throw err;
});

module.exports = con;