import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className="home flex">
				<h1>Danny Burton</h1>
				<h2>front end web developer</h2>
				<button className="button" onClick={this.props.navigate.bind(this, "work")}>View My Work</button>
			</div>
		);
	}
}

export default Home;