import React, { Component } from 'react';

class Contact extends Component {
	render() {
		var iconBox = this.props.skills.map((obj, i)=>{
			var item = this.props.skills[i];
			return (
				<article key={i}>
					<div className="flex">
						<i className={item.class} />
						<p>{item.name}</p>
					</div>
				</article>
			)
		});
		
		return (
			<div className="skills">
				<div className="wrap flex">
			
					<h4>What I Use</h4>
			
					<h3>
						I am proficient in many industry-standard technologies, including:
					</h3>

					<div className="skills-inner">
						<div className="wrap flex">
							{iconBox}
						</div>
					</div>
			
				</div>
			</div>
		);
	}
}

export default Contact;