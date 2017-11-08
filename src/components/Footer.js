import React, { Component } from 'react';

class Contact extends Component {
	render() {
		var socialLinks = this.props.social.map((obj, i)=>{
			console.log(obj.url);
			return(
				<a href={obj.url} target="_blank" key={i} className="flex">
					<i className={obj.icon} />
				</a>
			)
		});
		
		return (
			<footer>
				<div className="wrap flex">
					<div className="social-icons flex">
						{socialLinks}
					</div>
					<p>&copy; Made with love in React by me.</p>
				</div>
			</footer>
		);
	}
}

export default Contact;