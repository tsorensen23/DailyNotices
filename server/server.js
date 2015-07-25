var express = require('express');
var app = express();
var LikeController = require('./database/LikeController.js');
var userController = require('./database/userController.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://travis:abc123@ds063892.mongolab.com:63892/dailynotices');

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.json());
app.get('/profile', userController.getData);
app.post('/profile', userController.postUserProfile);
app.post('/checkLikes', LikeController.getData);
app.post('/likes', LikeController.postLikes);
app.listen(process.env.PORT || 3000);

console.log("listening on port 3000");

//youtube data api key
//AIzaSyCnDMycEKF7CWFYeXmKubIEmgQabvBAVzo
