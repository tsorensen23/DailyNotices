var LikeModel = require('./LikeModel.js');

module.exports = {
	//use getData function to populate Profile page
	getData: function(req, res) {
		console.log(req.body.videoIds, "this is the request");
		var arrayOfIds = req.body.videoIds;
		LikeModel.find({videoIds: {$in: arrayOfIds}}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},

	//use postLikeModel function when user hits "Register" button
	postLikes: function(req, res) {
		LikeModel.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};
