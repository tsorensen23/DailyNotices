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
				password: null
		};
	},
	setNextPage: function(nextPage) {
		this.setState({page: nextPage});
	},
	signIn: function() {
		this.setState({page: 'login'});
	},
	setName: function(username) {
		this.setState({username: name});
	},
	setPassword: function(password) {
		this.setState({password: password});
	},
	render: function() {
		console.log("rendering");
		console.log(this.state.page);
		if(this.state.page === "home") {
			console.log("inside home");
			return (
				<div>
					<HeaderBox signIn={this.signIn} />
					<HomeSearchBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage} />
				</div>
			);
		}
		if(this.state.page == "login") {
			console.log("inside right component");
			return (
				<div>
					<HeaderBox signIn={this.signIn} />
					<LoginBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage} setName={this.setName} setPassword={this.setPassword} />
				</div>
			);
		}
		// if(this.state.page === "profile") {
		// 	console.log("inside profile");
		// 	return (
		// 		<div>
		// 			<header>
		// 				<div id="company">DailyNotices</div>
		// 				<div id="username">
		// 					<i className="fa fa-user fa-2x"></i>
		// 					{this.state.username}
		// 				</div>
		// 			</header>
		// 			<ProfileBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage} />
		// 		</div>
		// 	);
		// }
		// else {
		// 	console.log("inside else");
		// 	//signed in
		// 	if(this.state.username !== null) {
		// 		return (
		// 			<div>
		// 				<header>
		// 					<div id="company">DailyNotices</div>
		// 					<div id="username">
		// 						<i className="fa fa-user fa-2x"></i>
		// 						{this.state.username}
		// 					</div>
		// 				</header>
		// 				<ResultsBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage} />
		// 			</div>
		// 		);
		// 	}
		// 	//not signed in
		// 	else {
		// 		return (
		// 			<div>
		// 				<header>
		// 					<div id="company">DailyNotices</div>
		// 					<div id="login">
		// 						<button type="button">Sign in</button>
		// 					</div>
		// 				</header>
		// 				<ResultsBox page={this.state.page} setNextPage={this.setNextPage} />
		// 			</div>
		// 		);
		// 	}
		// }
	}
});

React.render(<App />, document.body);