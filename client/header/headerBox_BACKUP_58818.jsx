var React = require('react');

var HeaderBox = React.createClass({
	handleCompanyButton: function() {
		this.props.goHome();
	},
	handleSignInButton: function() {
		this.props.signIn();
	},
	render: function() {
		if(this.props.page === "profile") {
			console.log(this.props.name);
			return (
				<header>
					<div id="company"><button onClick={this.handleCompanyButton}>DailyNotices</button></div>
					<div id="profile">
						<i className="fa fa-user fa-2x"></i>
						<span id="user">{this.props.name}</span>
					</div>
				</header>
			);
		}
		else {
			return (
				<header>
					<div id="company"><button onClick={this.handleCompanyButton}>DailyNotices</button></div>
					<div id="welcomeUserName"><p>Welcome {this.props.name} </p> </div>
					<div id="login">
						<button id="signInButton" type="button" onClick={this.handleSignInButton}>Sign in</button>
					</div>
				</header>
			);
		}
	}
});

module.exports = HeaderBox;