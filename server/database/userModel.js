var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {type: String},
	password: {type: String}
});

module.exports = mongoose.model('UserSchema', UserSchema);
