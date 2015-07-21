var React = require('react');

var App = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	componentWillMount: function(){

	},

	setVideoList: function(array) {

	},

	getVideos: function() {
		$.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCnDMycEKF7CWFYeXmKubIEmgQabvBAVzo&part=id&chart=mostPopular',
      success: function(data) {
      	console.log(data, "this is the data");
        this.setVideoList(data);
      }.bind(this)
    });
	},

	
	render: function() {
			return (
				<div>
					<h1>hello</h1>
				</div>
			);
		}
});

React.render(<App />, document.body);