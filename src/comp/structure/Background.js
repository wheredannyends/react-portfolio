import React, { Component } from 'react';

class Background extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			clouds: [
				'../../img/background/clouds-1.svg',
			]
		}
	}
	
	render() {
		
		let curBg = " bg-" + this.props.curPage,
			contactActive = "";
		
		var cloudRender = this.state.clouds.map((obj, i) => {
			return <img src={require(obj)} alt="Clouds" />;
		});
		
		if (this.props.curPage === "contact") {
			contactActive = " contact-active";
		}
		
		return (
			<section className={"background" + curBg}>
				<div className="bg-screen"></div>
				<div className="bg-screen">
					<div className={"bg-elements bg-clouds" + contactActive}>
						{cloudRender}
					</div>
					<div className={"bg-elements bg-mountains" + contactActive}></div>
				</div>
				<div className="bg-screen"></div>
			</section>
		);
	}
}

export default Background;
