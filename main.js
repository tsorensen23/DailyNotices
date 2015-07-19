var React = require('react');
var HeaderBox = require('./client/header/headerBox.jsx');
var HomeSearchBox = require('./client/homeSearch/homeSearchBox.jsx');
var LoginBox = require('./client/login/loginBox.jsx');
var ProfileBox = require('./client/profile/profileBox.jsx');
var ResultsBox = require('./client/results/resultsBox.jsx');

var App = React.createClass({
	getInitialState: function() {
		return {page: "home",
				username: null,
				password: null,
				searchResults: null
		};
	},
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
		console.log("username", username);
		this.setState({username: username});
		console.log("state change", this.state.username);
	},
	setPassword: function(password) {
		this.setState({password: password});
	},
	updateSearchResults: function(results) {
		this.setState({searchResults: results});
	},
	render: function() {
		console.log("rendering");
		console.log(this.state.page);
		if(this.state.page === "home") {
			return (
				<div>
					<HeaderBox name={this.state.username} page={this.state.page} 
					goHome={this.goHome} signIn={this.signIn} />
					<HomeSearchBox searchResults={this.state.searchResults} 
					updateSearchResults={this.updateSearchResults} page={this.state.page} 
					name={this.state.username} setNextPage={this.setNextPage} />
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
					<HeaderBox name={this.state.username} page={this.state.page} 
					goHome={this.goHome} signIn={this.signIn} />
					<ResultsBox page={this.state.page} setNextPage={this.setNextPage} />
				</div>
			);
		}
	}
});

React.render(<App />, document.body);