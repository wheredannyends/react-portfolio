

import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="about-nav flex">
					<h2
							className={this.props.processStatus}
							onClick={this.props.makeActive.bind(this, "process")}
					>
							How I Work
					</h2>
					<i className="ion ion-chevron-right" />
					<h2
							className={this.props.skillsStatus}
							onClick={this.props.makeActive.bind(this, "skills")}
					>
							What I Use
					</h2>
					<i className="ion ion-chevron-right" />
					<h2
							className={this.props.profileStatus}
							onClick={this.props.makeActive.bind(this, "profile")}
					>
							Who I Am
					</h2>
			</div>
		);
	}
}

export default Contact;