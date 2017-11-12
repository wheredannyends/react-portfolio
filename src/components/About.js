import React, { Component } from 'react';
import Services from './AboutComps/Services';
import Skills from './AboutComps/Skills';

class Icons extends Component {
		render() {
			return (
				<section className="about" id="about">
					<div className="wrap flex">
						<Services services={this.props.services} />
						<Skills skills={this.props.skills} />
					</div>
				</section>
			);
	}
}

export default Icons;