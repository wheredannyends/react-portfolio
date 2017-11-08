import React, { Component } from 'react';

class AboutNavC extends Component {
	render() {
		return (
			<div className="about-nav-c">
				<div className="wrap flex">
					<div className="about-nav-circle flex active" onClick={this.props.makeActive.bind(this, "process")}><h3>1</h3></div>
					<div className="about-nav-circle flex" onClick={this.props.makeActive.bind(this, "skills")}><h3>2</h3></div>
					<div className="about-nav-circle flex" onClick={this.props.makeActive.bind(this, "profile")}><h3>3</h3></div>
				</div>
			</div>
		);
	}
}

export default AboutNavC;