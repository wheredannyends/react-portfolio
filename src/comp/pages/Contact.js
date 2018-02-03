import React, { Component } from 'react';

class Contact extends Component {
	render() {
		let compDisp = null;
		
		if (this.props.pageTrans === false) {
			compDisp = (
				<div className="contact">
					<div className="wrap flex">
						<h1>Contact</h1>
						<h2>real shit coming soon</h2>
					</div>
				</div>
			);
		}
		
		return compDisp;
	}
}

export default Contact;