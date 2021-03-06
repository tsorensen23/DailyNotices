var React = require('react');
// var Router = require('react-router');
// var Route = Router.Route;

var HeaderBox = require('./client/header/headerBox.jsx');
var LoginBox = require('./client/login/loginBox.jsx');
var ResultsBox = require('./client/results/resultsBox.jsx');
var ProfileBox = require('./client/profile/profileBox.jsx');
var HomeSearchBox = require('./client/homeSearch/homeSearchBox.jsx');

var App = React.createClass({
	getInitialState: function() {
		return {page: "home",
				username: null,
				password: null,
				searchResults: null,
				listOfVideos: [],
				likedVideos: null,
				searchTerm: null,
        chatRoomId: 'travis',
		};
	},
	componentWillMount: function(){
		// this.getVideos('china');
	},

  setPassword: function(password) {
    this.setState({passwrd: password});
  },
  
	setVideoLikeState: function(videoid, arrayOfLikes) {
		var videoObj = {};
		var video = videoid;
		videoid[video] = arrayOfLikes;
		this.setState(videoObj);
	},

	setVideoList: function(array) {
		this.checkLikes(array.items);
		this.setState({listOfVideos: array.items});
	},

  setchatRoomId: function(id) {
    this.setState({chatRoomId: id});
  },

	checkLikes: function(array) {
    var videoIdArray = array.map(function(element){
    	return element.id.videoId;
    });
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
		this.setState({username: username});
	},

	getVideos: function(query) {
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';
    url = url + 'q=' + query + '&key=AIzaSyCnDMycEKF7CWFYeXmKubIEmgQabvBAVzo';
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: url,
      success: function(data) {
        this.setVideoList(data);
      }.bind(this)
    });
	},

	
	render: function() {
		if(this.state.page === "home") {
			return (
				<div>
					<HeaderBox name={this.state.username} page={this.state.page} 
					goHome={this.goHome} signIn={this.signIn} />
					<HomeSearchBox searchResults={this.state.searchResults} 
					updateSearchResults={this.updateSearchResults} page={this.state.page} 
					name={this.state.username} setNextPage={this.setNextPage} getVideos={this.getVideos} />
					<ResultsBox setChatId={this.setchatRoomId} videoArray={this.state.listOfVideos} username={this.state.username} likedVideosArray={this.state.likedVideos} checkLikes={this.checkLikes} setNextPage={this.setNextPage} />
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
					<ProfileBox chatRoomId={this.state.chatRoomId} page={this.state.page} name={this.state.username} 
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
  }
});

React.render(<App />, document.body);