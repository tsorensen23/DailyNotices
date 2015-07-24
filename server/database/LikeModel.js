var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
	username: {type: String},
	videoId: {type: String}
});

module.exports = mongoose.model('LikeSchema', LikeSchema);
