import React, { Component } from 'react';

class Contact extends Component {
	render() {
		var cardItems = this.props.services.map((obj, i)=>{
			return (
				<article key={i}>
					<div className="flex">
						<i className={this.props.services[i].icon}/>
						<h2>{this.props.services[i].heading}</h2>
						<p>{this.props.services[i].description}</p>
					</div>
				</article>
			)
		});
		
		return (
			<div className="services">
				<div className="wrap flex">
			
					<h4>What I Do</h4>
			
					<h3>
						I have a wide-range of abilities. Here is what I'm best at:
					</h3>
			
					{cardItems}
			
				</div>
			</div>
		);
	}
}

export default Contact;