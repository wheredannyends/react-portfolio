import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';

class Content extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let navActive = "",
			curComp = null;
		
		if (this.props.pageTrans === true) {
			navActive = " content-transition";
		}

		if (this.props.curPage === "home") {
			curComp = (
				<Home pageTrans={this.props.pageTrans} navigate={this.props.navigate} />
			);
		} else if (this.props.curPage === "about") {
			curComp = <About pageTrans={this.props.pageTrans} />;
		} else if (this.props.curPage === "work") {
			curComp = <Work pageTrans={this.props.pageTrans} />;
		} else if (this.props.curPage === "contact") {
			curComp = <Contact pageTrans={this.props.pageTrans} />;
		}
		
		return (
			<section className={"content" + navActive}>
				{curComp}
			</section>
		);
	}
}

export default Content;