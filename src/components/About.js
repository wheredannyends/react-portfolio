import React, { Component } from 'react';
import Process from './AboutComps/Process';
import Skills from './AboutComps/Skills';

class Icons extends Component {
		constructor(props) {
				super(props);
				
				this.state = {
						active: "process",
						skillsStatus: "about-heading",
						processStatus: "about-heading active",
						profileStatus: "about-heading"
				}
		}
	
		render() {
			return (
				<section className="about" id="about">
					<div className="wrap flex">
						<Process process={this.props.process} />
						<Skills skills={this.props.skills} />
					</div>
				</section>
			);
	}
}

export default Icons;