import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<section className="contact" id="contact">
				<div className="wrap flex">
					<h4>Let's Work Together</h4>
					<h3>I'm always looking for new projects. Tell me about yours.</h3>
					<a href="mailto:iam@dannyburton.ca?subject=Hey%20Danny&body=If%20you%20have%20a%20project%20in%20mind%20already,%20tell%20me%20all%20about%20it!%20The%20more%20details%20you%20have%20the%20better." className="button-primary">Email Me</a>
				</div>
			</section>
		);
	}
}

export default Contact;