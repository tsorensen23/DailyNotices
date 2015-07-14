var React = require('react');

var HomeSearchBox = React.createClass({
	handleHomeSearch: function(key) {
		var self = this;
		var searchTerm = $('#homeSearch').val();
		if(key.keyCode === 13 && searchTerm !== "") {
			var holder = $('.item');
			holder.empty();
			$('#homeSearch').val("");
			//api time
			gapi.client.setApiKey("AIzaSyDU3cBmsi1AI93dZh_ZvuhmhRtwfA73ix8");
			gapi.client.load("youtube", "v3", function() {
				var request = gapi.client.youtube.search.list({
					part: "snippet",
					type: "video",
					q: encodeURIComponent(searchTerm).replace(/%20/g, "+"),
					// channelId: "News"
				});
				console.log("request", request);
				//execute request
				request.execute(function(response) {
					var results = response.result;
					$.each(results.items, function(index, item) {
						$.get('./searchResult.html', function(data) {
							$('#resultsBox').append(tplawesome(data, [{"title": item.snippet.title, "videoid": item.id.videoId}]));
						})
					});
				});
			});
		}		
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
					<input id="homeSearch" placeholder="Search..." onKeyDown={this.handleHomeSearch}></input>
					<div id="resultsBox"></div>
				</div>
			);
		// }
		// else {
		// 	return (
		// 		<div id="homeSearchBox">
		// 			<div id="play">
		// 				<i className="fa fa-youtube-play fa-4x"></i>
		// 			</div>
		// 			<div id="globe">
		// 				<img src={__dirname + "/BlackandWhiteGlobe.png"}/>
		// 			</div>
		// 			News You Care About
		// 			<input id="homeSearch" placeholder="Search..." onKeyDown={this.handleHomeSearch}></input>
		// 			// <div id="resultsBox">
		// 			// 	<div className="item">
		// 			// 		<h2>{title}</h2>
		// 			// 		<iframe className="video w100" width="640" height="360" src="//www.yoututbe.com/embed/{videoid}" frameborder="0" allowfullscreen></iframe>
		// 			// 	</div>
		// 			// </div>
		// 		</div>
		// 	);
		// }
	}
});

module.exports = HomeSearchBox;

function tplawesome(e,t) {
	res=e;
	for(var n=0;n<t.length;n++) {
		res=res.replace(/\{\{(.*?)\}\}/g, function(e,r) {
			return t[n][r]});
	}
	return res;
}

// var searchResults = $.each(results.items, function(index, item) {
// 						return (
// 							<div id="item">
// 								<h2>{item.snippet.title}</h2>
// 								<iframe className="video w100" width="640" height="360" src="//www.youtube.com/embed/{item.id.videoId}" frameborder="0" allowfullscreen></iframe>
// 							</div>
// 						);
// 						// $('#resultsBox').append(item.id.videoId+" "+item.snippet.title+"<br>");
// 					});
// $('#resultsBox').append(searchResults);
// self.props.updateSearchResults(searchResults);
// console.log("new state", self.props.searchResults);