import React, { Component } from 'react';

class Home extends Component {
	render() {
		let compDisp = null;
		
		if (this.props.pageTrans === false) {
			compDisp = (
				<div className="home">
					<div className="wrap flex">
						<h1>Danny Burton</h1>
						<h2>front end web developer</h2>
						<button className="button" onClick={this.props.navigate.bind(this, "work")}>View My Work</button>
					</div>
				</div>
			);
		}
		
		return compDisp;
	}
}

export default Home;