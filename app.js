const express = require('express');
const app = express();
const PORT = 3000;
const dbConn = require('./lib/db');

app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
    dbConn.query('SELECT * FROM kunde', function(err, rows){
        // res.render('kunder', {data:rows});
        console.log(rows);
        if (err) {
            console.log(err);
        } else {
            res.render('kunder', {data:rows});
        }
    });
});

app.listen(PORT, function (err){
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});