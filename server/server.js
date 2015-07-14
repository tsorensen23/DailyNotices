var express = require('express');
var app = express();
var userController = require('./database/userController.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://victoria:password@ds049538.mongolab.com:49538/vleon');

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.json());
app.get('/profile', userController.getData);
app.post('/profile', userController.postUserProfile);
app.listen(process.env.PORT || 3000);

console.log("listening on port 3000");