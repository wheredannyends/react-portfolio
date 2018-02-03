import React, { Component } from 'react';

import Header from './comp/structure/Header';
import Background from './comp/structure/Background';
import Content from './comp/structure/Content';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curPage: "work",
			pageTrans: false,
		}
	}
	
	navigate = (path) => {
		if (path !== this.state.curPage) {
			this.setState({
				curPage: path,
				pageTrans: true,
			});
		}
		
		setTimeout(() => {
			this.setState({
				pageTrans: false,
			});
		}, 1000);
	}
	
	render() {
		return (
			<main className="main-container">
				<Background
					curPage={this.state.curPage}
				/>
				<Header
					curPage={this.state.curPage}
					navigate={this.navigate}
				/>
				<Content
					navigate={this.navigate}
					curPage={this.state.curPage}
					pageTrans={this.state.pageTrans}
				/>
			</main>
		);
	}
}

export default App;
