import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Contact extends Component {
	trackSocial = (title) => {
		ReactGA.event({
			category: 'Social Link',
			action: title
		});
	}
	
	render() {
		let socialLinks = this.props.data.social.map((obj, i) => {
			return (
				<a key={i} href={obj.url} target="_blank" className="flex" onClick={this.trackSocial.bind(this, obj.title)}>
					<i className={obj.icon}></i>
				</a>
			);
		});
		
		return (
			<div className="section contact">
				<div className="wrap flex">
					<div className="social flex">
						<h3>Connect with me</h3>
						<div className="social-links flex">{socialLinks}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;