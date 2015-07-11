var React = require('react');
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
		console.log("rob");
		this.setState({page: 'login'});
		console.log("travis");
	},
	setName: function(username) {
		this.setState({username: name});
	},
	setPassword: function(password) {
		this.setState({password: password});
	},
	render: function() {
		console.log(this.state.page);
		if(this.state.page === "home") {
			return (
				<div>
					<HomeSearchBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage.bind(this)} signIn={this.signIn.bind(this)} />
				</div>
			);
		}
		else if(this.state.page === "login") {
			return (
				<div>
					<header>
						<div id="company">DailyNotices</div>
					</header>
					<LoginBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage.bind(this)} setName={this.setName.bind(this)} setPassword={this.setPassword.bind(this)} />
				</div>
			);
		}
		else if(this.state.page === "profile") {
			return (
				<div>
					<header>
						<div id="company">DailyNotices</div>
						<div id="username">
							<i className="fa fa-user fa-2x"></i>
							{this.state.username}
						</div>
					</header>
					<ProfileBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage.bind(this)} />
				</div>
			);
		}
		else {
			//signed in
			if(this.state.username !== null) {
				return (
					<div>
						<header>
							<div id="company">DailyNotices</div>
							<div id="username">
								<i className="fa fa-user fa-2x"></i>
								{this.state.username}
							</div>
						</header>
						<ResultsBox page={this.state.page} name={this.state.username} setNextPage={this.setNextPage.bind(this)} />
					</div>
				);
			}
			//not signed in
			else {
				return (
					<div>
						<header>
							<div id="company">DailyNotices</div>
							<div id="login">
								<button type="button">Sign in</button>
							</div>
						</header>
						<ResultsBox page={this.state.page} setNextPage={this.setNextPage.bind(this)} />
					</div>
				);
			}
		}
	}
});

React.render(<App />, document.body);