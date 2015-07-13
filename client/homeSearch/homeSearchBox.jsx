var React = require('react');

var HomeSearchBox = React.createClass({
	render: function() {
		return (
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
		);
	}
});

module.exports = HomeSearchBox;