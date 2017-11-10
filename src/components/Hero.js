import React, { Component } from 'react';

class Hero extends Component {
	render() {
		
		return (
			<section className="hero" id="top">
				<div className="wrap flex">
						<h4 id="hero-title-1">I am a web designer based in Vancouver, Canada</h4>
						<h5 id="hero-title-2">I design intuitive user experiences and bring them to life using modern web technologies. I can help your brand stand out from "the other guys."</h5>
						<a href="#contact" className="button-primary" id="hero-button">How Can I Help You?</a>
				</div>
			</section>
		);
	}
}

export default Hero;