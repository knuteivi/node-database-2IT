const express = require('express');
const app = express();
const PORT = 3000;
const dbConn = require('./lib/db');

//This one is necessary to read form data using req.body
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
    dbConn.query('SELECT * FROM kunde', function(err, rows){
        console.log(rows);
        if (err) {
            console.log(err);
        } else {
            res.render('kunder', {data:rows});
        }
    });
});

app.get('/add', function(req, res, next){
    //render to add.ejs
    res.render('add',{Id: '', Navn: 'Knut', Epost: ''});
});

app.post('/add', function(req, res, next){
    console.log(req.body);
    let id1 = req.body.id;
    let navn1 = req.body.navn;
    let epost1 = req.body.epost;
    let errors = false;

    if(!errors){
        let form_data = {
            id: id1,
            navn: navn1,
            epost: epost1
        }
        dbConn.query('INSERT INTO kunde SET ?', form_data, function(err, result){
            res.redirect('/');
        })
    }
});

app.listen(PORT, function (err){
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});