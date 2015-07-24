var UserModel = require('./UserModel.js');

module.exports = {
	//use getData function to populate Profile page
	getData: function(req, res) {
		UserModel.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},

	//use postUserModel function when user hits "Register" button
	postUserProfile: function(req, res) {
		UserModel.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};
