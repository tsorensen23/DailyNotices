var UserProfile = require('./userModel.js');

module.exports = {
	//use getData function to populate Profile page
	getData: function(req, res) {
		UserProfile.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},
	//use postUserProfile function when user hits "Register" button
	postUserProfile: function(req, res) {
		UserProfile.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};
