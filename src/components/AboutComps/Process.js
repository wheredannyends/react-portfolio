import React, { Component } from 'react';

class Contact extends Component {
	render() {
		var cardItems = this.props.process.map((obj, i)=>{
			return (
				<div key={i} className="process-card">
					<div className="flex">
						<i className={this.props.process[i].icon}/>
						<h2>{this.props.process[i].heading}</h2>
						<p>{this.props.process[i].description}</p>
					</div>
				</div>
			)
		});
		
		return (
			<div className="process">
				<div className="wrap flex">
			
					<h4>What I Do</h4>
			
					<h3>
						You want your brand to stand out? I can help with that.
					</h3>
			
					{cardItems}
			
				</div>
			</div>
		);
	}
}

export default Contact;