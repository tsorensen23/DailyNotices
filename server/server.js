var express = require('express');
var app = express();
var LikeController = require('./database/LikeController.js');
var UserController = require('./database/UserController.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://travis:abc@ds047692.mongolab.com:47692/dailynotices');

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.json());
app.get('/profile', UserController.getData);
app.post('/profile', UserController.postUserProfile);
app.post('/checkLikes', LikeController.getData);
app.post('/likes', LikeController.postLikes);
app.listen(process.env.PORT || 3000);

console.log("listening on port 3000");
<<<<<<< HEAD
=======
//youtube data api key
//AIzaSyCnDMycEKF7CWFYeXmKubIEmgQabvBAVzo
>>>>>>> 8df8d2b48ad688a7ef085801d5364a8411007be8
