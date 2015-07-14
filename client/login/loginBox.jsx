var React = require('react');

var LoginBox = React.createClass({
	handleRegisterClick: function(e) {
		var self = this;
		var username = $('#username').val();
		var password = $('#password').val();
		this.props.setName(username);
		this.props.setPassword(password);
		$('#username').val('');
		$('#password').val('');
		if(username !== '' && password !== '') {
			var profileObject = {
				username: username,
				password: password
				// like1: null,
				// like2: null,
				// like3: null,
				// like4: null,
				// like5: null,
				// like6: null,
				// like7: null,
				// like8: null,
			};
			$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: '/profile',
				data: JSON.stringify(profileObject),
				success:function(data) {
					console.log("successfully posted to db");
					self.props.setNextPage('profile');
				}
			});
		}
		else {
			alert("Please enter a username and password to create an account.");
		}
	},
	handleSubmitClick: function(e) {
		var self = this;
		var correctLogin = false;
		var username = $('#username').val();
		var password = $('#password').val();
		$('#username').val('');
		$('#password').val('');
		if(username !== '' && password !== '') {
			$.ajax({
				method: 'GET',
				dataType: 'json',
				url: '/profile',
				success: function(data) {
					for(var i = 0; i < data.length; i++) {
						if(data[i].username === username && data[i].password === password) {
							self.props.setName(username);
							self.props.setPassword(password);
							self.props.setNextPage('profile');
							correctLogin = true;
							break;
						}
					}
					if(correctLogin === false) {
						alert("Incorrect login credentials. Please try again.");
					}
				}
			});
		}
		else {
			alert("Please log in to continue.");
		}
	},
	render: function() {
		return (
			<div id="loginContentHolder">
				<div id="loginContent">
					<h1>Welcome!</h1>
					<div id="loginInput">
						<input id="username" placeholder="Username"></input>
						<input id="password" placeholder="Password"></input>
					</div>
					<div id="buttonsHolder">
						<button id="registerButton" type="button" onClick={this.handleRegisterClick.bind(this)}>Register</button>
						<button id="submitButton" type="button" onClick={this.handleSubmitClick.bind(this)}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoginBox;
