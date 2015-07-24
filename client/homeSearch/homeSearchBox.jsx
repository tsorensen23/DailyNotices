var React = require('react');

var HomeSearchBox = React.createClass({
	handleHomeSearch: function(key) {
		if(key.keyCode === 13 && this.state.searchTerm !== null) {
			console.log(this.state.searchTerm);
			this.props.getVideos(this.state.searchTerm);
		}		
},

	handleChange: function() {
		var node = React.findDOMNode(this);
		var inputBox = document.getElementById("homeSearch");
    var text = inputBox.value;
    
    this.setState({searchTerm: text});
	},

	render: function() {
		// if(this.props.searchResults === null) {
			return (
				<div id="homeSearchBox">
					<div id="play">
						<i className="fa fa-youtube-play fa-4x"></i>
					</div>
					<div id="globe">
						<img src={__dirname + "/BlackandWhiteGlobe.png"}/>
					</div>
					News You Care About
					<input id="homeSearch" onChange={this.handleChange} placeholder="Search..." onKeyDown={this.handleHomeSearch}></input>
				</div>
			);
	}
});

module.exports = HomeSearchBox;
