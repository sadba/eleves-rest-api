var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();




mongoose.connect('mongodb://localhost/rest_test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





//Routes
app.use('/api', require('./routes/api'))

app.get('/', function(req, res){
	res.send('sa marche');
});

app.listen(3000);
console.log('Api marche sur le port 3000');