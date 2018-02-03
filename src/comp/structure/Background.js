import React, { Component } from 'react';

class Background extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			clouds: [1,2,3,4,5,6,7,8,9],
			mountains: [1,2,3,4],
		}
	}
	
	render() {
		
		let curBg = " bg-" + this.props.curPage,
			contactActive = "";
		
		var cloudRender = this.state.clouds.map((obj, i) => {
			return (
				<img key={i} src={require('../../img/background/clouds-' + obj + '.svg')} alt={i} />
			)
		});

		var mountainRender = this.state.mountains.map((obj, i) => {
			return (
				<img key={i} src={require('../../img/background/mountains-' + obj + '.svg')} alt={i} />
			)
		});
		
		if (this.props.curPage === "contact") {
			contactActive = " contact-active";
		}
		
		return (
			<section className={"background" + curBg}>
				<div className={"bg-screen" + contactActive}></div>
				<div className={"bg-screen" + contactActive}>
					<div className={"bg-elements bg-clouds" + contactActive}>
						{cloudRender}
					</div>
					<div className={"bg-elements bg-mountains" + contactActive}>
						{mountainRender}
					</div>
				</div>
				<div className={"bg-screen" + contactActive}></div>
			</section>
		);
	}
}

export default Background;