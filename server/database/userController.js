var userModel = require('./userModel.js');

module.exports = {
	//use getData function to populate Profile page
	getData: function(req, res) {
		userModel.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},

	//use postuserModel function when user hits "Register" button
	postUserProfile: function(req, res) {
		userModel.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};
