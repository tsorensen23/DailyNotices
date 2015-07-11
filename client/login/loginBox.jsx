var React = require('react');

var LoginBox = React.createClass({
	handleRegisterClick: function(e) {
		var username = $('#username').val();
		var password = $('#password').val();
		$('#username').val('');
		$('#password').val('');
		this.props.setName(username);
		this.props.setPassword(password);
	},
	handleBSubmitClick: function(e) {
		var correctLogin = false;
		if(username !== '' && password !== '') {
			var username = $('#username').val();
			var password = $('#password').val();
			$('#username').val('');
			$('#password').val('');
			$.ajax({
				method: 'GET',
				dataType: 'json',
				url: '/profile',
				success: function(data) {
					for(var i = 0; i < data.length; i++) {
						if(data[i].username === username && data[i].password === password) {
							this.props.setNextPage('profile');
							correctLogin = true;
							break;
						}
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
			<div id="loginPage">
				
				<div id="loginContentHolder">
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