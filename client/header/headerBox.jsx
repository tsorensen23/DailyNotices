var React = require('react');

var HeaderBox = React.createClass({
	handleSignInButton: function() {
		this.props.signIn();
	},
	render: function() {
		return (
			<header>
				<div id="company"><span>DailyNotices</span></div>
				<div id="login">
					<button id="signInButton" type="button" onClick={this.handleSignInButton}>Sign in</button>
				</div>
			</header>
		);
	}
});

module.exports = HeaderBox;