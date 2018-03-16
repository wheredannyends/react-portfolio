import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Data from './data/data.json';

import Header from './comp/structure/Header.jsx';
import Background from './comp/structure/Background.jsx';
import Content from './comp/structure/Content.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curPage: "home",
			curBg: "home",
			pageTrans: false,
			caseInd: 0,
		}
	}
	
	componentDidMount() {
		ReactGA.initialize({
			trackingId: 'UA-96324378-3'
		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	
	navigate = (path) => {
		if ((path === "casestudy" && this.state.curPage === "work") || (path === "work" && this.state.curPage === "casestudy")) {
			this.setState({
				pageTrans: true,
			});
			
			setTimeout(() => {
				this.setState({
					curPage: path,
					curBg: path,
					pageTrans: false,
				});
			}, 300);
			
			ReactGA.event({
				category: 'Navigation',
				action: 'Viewed Case Study',
				label: Data.workData[this.state.caseInd + 1].title
			});
		} else if (path === "casestudy" && this.state.curPage === "casestudy") {
			this.setState({
				pageTrans: true,
			});
			
			setTimeout(() => {
				this.setState({
					curPage: path,
					curBg: path,
					pageTrans: false,
				});
			}, 300);
		} else if (path !== this.state.curPage) {
			this.setState({
				pageTrans: true,
				
			});
			
			setTimeout(()=>{
				this.setState({
					curBg: path,
				});
			}, 200);
			
			setTimeout(() => {
				this.setState({
					curPage: path,
				});

				setTimeout(() => {
					this.setState({
						pageTrans: false,
					});
				}, 500);
			}, 500);
			
			if (path !== "home") {
				ReactGA.event({
					category: 'Navigation',
					action: path
				});
			}
		}
	}
	
	setCaseData = (ind) => {
		this.setState({
			caseInd: ind,
		});
	}
	
	caseNext = (nextInd) => {
		let newInd = nextInd;
		
		if (nextInd === Data.workData.length) {
			newInd = 0;
		}
		
		setTimeout(() => {
			this.setState({
				caseInd: newInd,
			});
		}, 300);
	}
	
	casePrev = (nextInd) => {
		let newInd = nextInd;
		
		if (nextInd < 0) {
			newInd = Data.workData.length;
		}
		
		setTimeout(() => {
			this.setState({
				caseInd: newInd,
			});
		}, 300);
	}
	
	render() {
		return (
			<main className="main-container">
				<Background
					curPage={this.state.curPage}
					curBg={this.state.curBg}
				/>
				<Header
					curPage={this.state.curPage}
					navigate={this.navigate}
				/>
				<Content
					navigate={this.navigate}
					curPage={this.state.curPage}
					pageTrans={this.state.pageTrans}
					data={Data}
					setCaseData={this.setCaseData}
					caseData={this.state.caseData}
					caseInd={this.state.caseInd}
					caseNext={this.caseNext}
					casePrev={this.casePrev}
				/>
			</main>
		);
	}
}

export default App;
