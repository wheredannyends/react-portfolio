import React, { Component } from 'react';

class Work extends Component {
	render() {
		let compDisp = null;

		if (this.props.pageTrans === false) {
			compDisp = (
				<div className="work">
					<div className="wrap flex">
					</div>
				</div>
			);
		}
		
		return compDisp;
	}
}

export default Work;