const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'kunder'
});

connection.connect(function(error){
    if(!error){
        console.log(error);
    }
    else{
        console.log('Connected');
    }
});

module.exports = connection;
