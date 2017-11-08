import React, { Component } from 'react';

class Hero extends Component {
	render() {
		var titles = this.props.jobTitles.map((obj, i)=>{
			return (
					<div key={i} className="element">
						{obj}
					</div>
				)
		});
		
		return (
			<section className="hero" id="hero">
				<div className="wrap flex">
					<h1>Danny Burton</h1>
						<div className="title_outer">
							<div className="title_inner">
								{titles}
								<div className="element">{this.props.jobTitles[0]}</div>
							</div>
						</div>
					<a href="#contact" rel="noopener noreferrer" className="button-primary">View Website</a>
				</div>
			</section>
		);
	}
}

export default Hero;