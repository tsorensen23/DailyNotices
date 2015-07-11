var React = require('react');
var homeSearch = require('./homeSearchBox.jsx');

var HomeSearchBox = React.createClass({
	handleSignInButton: function() {
		console.log("jasmine");
		this.props.signIn();
		console.log("victoria");
	},
	render: function() {
		return (
			<div id="homePage">
				<header>
					<div id="company"><span>DailyNotices</span></div>
					<div id="login">
						<button id="signInButton" type="button" onClick={this.handleSignInButton}>Sign in</button>
					</div>
				</header>
				<div id="homeSearchBox">
					<div id="play">
						<i className="fa fa-youtube-play fa-4x"></i>
					</div>
					<div id="globe">
						<img src={__dirname + "/BlackandWhiteGlobe.png"}/>
					</div>
					News You Care About
					<input id="homeSearch" placeholder="Search..."></input>
				</div>
			</div>
		);
	}
});

module.exports = HomeSearchBox;