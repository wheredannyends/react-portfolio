import React, { Component } from 'react';

import Header from './comp/structure/Header';
import Background from './comp/structure/Background';
import Content from './comp/structure/Content';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curPage: "home",
			transitionActive: false,
		}
	}
	
	navigate = (path) => {
		if (path != this.state.curPage) {
			this.setState({
				curPage: path,
				transitionActive: true,
			});
		}
	}
	
	transitionBegin = () => {
		this.setState({
			transitionActive: true,
		});
	}
	
	transitionComplete = () => {
		this.setState({
			transitionActive: false,
		});
	}
	
	render() {
		return (
			<main className="main-container">
				<Background
					curPage={this.state.curPage}
				/>
				<Header
					navigate={this.navigate}
					curPage={this.state.curPage}
					transitionBegin={this.state.transitionBegin}
				/>
				<Content
					curPage={this.state.curPage}
					transitionActive={this.state.transitionActive}
					transitionComplete={this.transitionComplete}
				/>
			</main>
		);
	}
}

export default App;
