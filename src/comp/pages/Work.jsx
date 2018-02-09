import React, { Component } from 'react';
import WorkCard from '../assets/WorkCard';

class Work extends Component {
	render() {
		const workData = this.props.workData.map((obj, i) => {
			return (
				<WorkCard key={i} caseInd={i} data={obj} setCaseData={this.props.setCaseData} navigate={this.props.navigate} />
			);
		});
		
		return (
			<div className="work">
				<div className="wrap flex">
					{workData}
				</div>
			</div>
		);
	}
}

export default Work;