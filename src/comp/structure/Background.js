import React, { Component } from 'react';

class Background extends Component {
	render() {
		
		let curBg = " bg-" + this.props.curPage,
			contactActive = "";
		
		if (this.props.curPage === "contact") {
			contactActive = " contact-active";
		}
		
		return (
			<section className={"background" + curBg}>
				<div></div>
				<div>
					<article className={"clouds" + contactActive}></article>
					<article className={"mountains" + contactActive}></article>
				</div>
				<div></div>
			</section>
		);
	}
}

export default Background;
