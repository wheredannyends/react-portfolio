import React, { Component } from 'react';

class About extends Component {
	render() {
		let dbFacts = this.props.data.facts.map((obj, i) => {
			let val2 = null;
			
			if (obj.val2) {
				val2 = (
					<p>{obj.val2}</p>
				);
			}
			
			return (
				<article key={i} className="profile-left-fact flex">
					<h3>{obj.key}</h3>
					<p>{obj.val}</p>
					{val2}
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
						
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, consequatur aut delectus odit dicta hic accusantium quidem quod commodi asperiores qui? Expedita, porro, est. Esse distinctio dignissimos illum itaque inventore temporibus necessitatibus commodi, soluta voluptatibus, maxime omnis hic eveniet, nostrum laboriosam quia provident quibusdam, mollitia ipsa. Quam aliquid magni eligendi!</p>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, consequatur aut delectus odit dicta hic accusantium quidem quod commodi asperiores qui? Expedita, porro, est. Esse distinctio dignissimos illum itaque inventore temporibus necessitatibus commodi, soluta voluptatibus, maxime omnis hic eveniet, nostrum laboriosam quia provident quibusdam, mollitia ipsa. Quam aliquid magni eligendi!</p>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, consequatur aut delectus odit dicta hic accusantium quidem quod commodi asperiores qui? Expedita, porro, est. Esse distinctio dignissimos illum itaque inventore temporibus necessitatibus commodi, soluta voluptatibus, maxime omnis hic eveniet, nostrum laboriosam quia provident quibusdam, mollitia ipsa. Quam aliquid magni eligendi!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;