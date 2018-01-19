import React, { Component } from 'react';

class Hero extends Component {
	render() {
		
		return (
			<section className="hero" id="top">
				<div className="wrap flex">
                    <h4 id="hero-title-1">I am a front end web developer based in Vancouver</h4>
                    <h5 id="hero-title-2">
                        I design and build clean and intuitive websites and web applications. I am proficient in industry-standard web technologies, and am always working on expanding my skillset.
                    </h5>
                    <a href="#work" className="button-primary" id="hero-button">View My Work</a>
				</div>
			</section>
		);
	}
}

export default Hero;