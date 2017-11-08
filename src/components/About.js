import React, { Component } from 'react';
/*import AboutNav from './AboutComps/AboutNav';
import AboutNavC from './AboutComps/AboutNavC';*/
import Process from './AboutComps/Process';
import Skills from './AboutComps/Skills';
import Profile from './AboutComps/Profile';

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
		
		/*makeActive = (i) => {
				this.setState({
						active: i
				});
				
				if (i === "skills") {
						this.setState({
								skillsStatus: "about-heading active",
								processStatus: "about-heading",
								profileStatus: "about-heading"	
						});
				} else if (i === "process") {
						this.setState({
								skillsStatus: "about-heading",
								processStatus: "about-heading active",
								profileStatus: "about-heading"	
						});
				} else {
						this.setState({
								skillsStatus: "about-heading",
								processStatus: "about-heading",
								profileStatus: "about-heading active"	
						});
				}
		}*/
		
		render() {
			/*var activeComp = null,
						compCheck = this.state.active;
				
				if (compCheck === "skills") {
						activeComp = <Skills skills={this.props.skills} />;
				} else if (compCheck === "process") {
						activeComp = <Process process={this.props.process} />;
				} else {
						activeComp = <Profile />;
				}*/
				
				return (
						<section className="about" id="about">
								<div className="wrap flex">
										{/*<AboutNav
											makeActive={this.makeActive}
											skillsStatus={this.state.skillsStatus}
											processStatus={this.state.processStatus}
											profileStatus={this.state.profileStatus}
										/>}
										{activeComp}*/}
										<Process process={this.props.process} />
										<Skills skills={this.props.skills} />
										{/*<Profile />*/}
								</div>
						</section>
				);
	}
}

export default Icons;