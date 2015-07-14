var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String},
	password: {type: String},
	like1: {type: String},
	like2: {type: String},
	like3: {type: String},
	like4: {type: String},
	like5: {type: String},
	like6: {type: String},
	like7: {type: String},
	like8: {type: String}
});

module.exports = mongoose.model('UserProfile', userSchema);