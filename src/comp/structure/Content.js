import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';

class Content extends Component {
	render() {
		let navActive = "",
			curPage = this.props.curPage,
			curPageDisp = <Home />;
		
		if (this.props.transitionActive === true) {
			navActive = " content-transition";
			
			setTimeout(() => {
				
			}, 300);
			
			setTimeout(() => {
				this.props.transitionComplete();
			}, 1000);
		}
		
		return (
			<section className={"content" + navActive}>
				{curPageDisp}
			</section>
		);
	}
}

export default Content;