import React, { Component } from 'react';

class Contact extends Component {
	handleClick = (ind) => {
		this.props.setCaseData(ind);
		this.props.navigate("casestudy");
	}
	
	render() {
		const obj = this.props.data,
			  ind = this.props.caseInd;
		
		return (
			<article className="work-card flex" onClick={this.handleClick.bind(this, ind)}>
				<img src={require('../../img/work/mockups/' + obj.images[0])} alt={obj.title + " Mockup"} />
				<h3>{obj.title}</h3>
				<h4>{obj.role}</h4>
			</article>
		);
	}
}

export default Contact;