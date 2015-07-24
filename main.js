var React = require('react');

var App = React.createClass({
	getInitialState: function() {
		return {page: "home",
				username: null,
				password: null,
				searchResults: null,
				listOfVideos: [],
				likedVideos: null,
				searchTerm: null
		};
	},
	componentWillMount: function(){
		// this.getVideos('china');
	},
	setVideoLikeState: function(videoid, arrayOfLikes) {
		var videoObj = {};
		var video = videoid;
		videoid[video] = arrayOfLikes;
		console.log(videoid, "statechange");
		this.setState(videoObj);
	},

	setVideoList: function(array) {
		this.checkLikes(array.items);
		this.setState({listOfVideos: array.items});
	},

	checkLikes: function(array) {
		console.log("array", array);
    var videoIdArray = array.map(function(element){
    	return element.id.videoId;
    });
    console.log(videoIdArray, "videoIdArray");
    likeCheckObject = {
    videoIds: videoIdArray
    };
		$.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: '/checkLikes',
      data: JSON.stringify(likeCheckObject),
      success: function(data) {
        //bind this and remove self references
        console.log("data", data);
        this.setState({likedVideos: data});
      }.bind(this)
    });
	},

	//&q=china%7Cus-spain&maxResults=10&key={YOUR_API_KEY}

	setNextPage: function(nextPage) {
		this.setState({page: nextPage});
	},

	goHome: function() {
		this.setState({page: 'home'});
	},

	signIn: function() {
		this.setState({page: 'login'});
	},

	setName: function(username) {
		//fixed setName function by referring to correctly passed argument :)
		// console.log("username", username);
		this.setState({username: username});
		// console.log("state change", this.state.username);
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
		console.log(this.state.page,"render");
		console.log("Name", this.state.username);
		if(this.state.page === "home") {
			return (
				<div>
					<HeaderBox name={this.state.username} page={this.state.page} 
					goHome={this.goHome} signIn={this.signIn} />
					<HomeSearchBox searchResults={this.state.searchResults} 
					updateSearchResults={this.updateSearchResults} page={this.state.page} 
					name={this.state.username} setNextPage={this.setNextPage} getVideos={this.getVideos} />
					<ResultsBox videoArray={this.state.listOfVideos} username={this.state.username} likedVideosArray={this.state.likedVideos} checkLikes={this.checkLikes} setNextPage={this.setNextPage} />
				</div>
			);
		}
		if(this.state.page == "login") {
			return (
				<div>
					<HeaderBox name={this.state.username} page={this.state.page} 
					goHome={this.goHome} signIn={this.signIn} />
					<LoginBox page={this.state.page} name={this.state.username} 
					pw={this.state.password} setNextPage={this.setNextPage} 
					setName={this.setName} setPassword={this.setPassword} />
				</div>
			);
		}
		if(this.state.page === "profile") {
			return (
				<div>
					<HeaderBox page={this.state.page} name={this.state.username} 
					goHome={this.goHome} />
					<ProfileBox page={this.state.page} name={this.state.username} 
					setNextPage={this.setNextPage} />
				</div>
			);
		}
		if(this.state.page === 'search') {
			return (
				<div>
					<h1>hello</h1>
				</div>
			);
		}
});

React.render(<App />, document.body);