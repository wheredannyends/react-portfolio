import React, { Component } from 'react';

class About extends Component {
	render() {
		let dbFacts = this.props.data.facts.map((obj, i) => {
			let factDesc = null;
			
			if (obj.desc) {
				factDesc = (
					<p>{obj.desc}</p>
				);
			}
			
			return (
				<article key={i} className="profile-left-fact flex">
					<h3>{obj.title}</h3>
					<p>{obj.val}</p>
					{factDesc}
				</article>
			);
		});
		
		let dbBio = this.props.data.bio.map((obj, i) => {
			return <p key={i}>{obj}</p>
		});
		
		let dbSkills = this.props.data.skills.map((obj, i) => {
			return (
				<article key={i} className="flex">
					<i className={obj.icon}></i>
					<p>{obj.title}</p>
				</article>
			);
		});
		
		return (
			<div className="about">
				<div className="wrap flex">
					<div className="profile-left flex">
						<img src={require('../../img/db/headshot_sq.jpg')} alt="Headshot" />
						{dbFacts}
					</div>
		
					<div className="profile-right flex">
						<h3>Hi, I'm Danny.</h3>
						{dbBio}
						<div className="profile-skills flex">
							<h3>What I Use</h3>
							{dbSkills}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;