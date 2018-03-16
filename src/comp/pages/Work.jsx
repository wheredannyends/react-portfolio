import React, { Component } from 'react';
import WorkCard from '../assets/WorkCard';

class Work extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			filter: "all"
		}
		
		this.workFilterArr = [
			{
				tag: "all",
				title: "All Projects",
			},
			{
				tag: "dev",
				title: "Development",
			},
			{
				tag: "ui",
				title: "UX/UI Design",
			},
			{
				tag: "graphic",
				title: "Graphic Design",
			},
		]
	}
	
	setFilter = (filter) => {
		console.log(filter);
		this.setState({
			filter: filter
		});
	}
	
	isActive = (filter) => {
		return "";
	}
	
	render() {
		const workFilters = this.workFilterArr.map((obj, i) => {
			let butCls = "";
			
			if (obj.tag === this.state.filter) {
				butCls = "active"
			}
			
			return (
				<article
					key={i}
					className={butCls}
					onClick={this.setFilter.bind(this, obj.tag)}
				>
					<h5>{obj.title}</h5>
				</article>
			);
		})
		
		const workData = this.props.workData.map((obj, i) => {
			let visibleWork = null;
			
			if (obj.tags.includes(this.state.filter)) {
				visibleWork = (
					<WorkCard
						key={i}
						caseInd={i}
						data={obj}
						setCaseData={this.props.setCaseData}
						navigate={this.props.navigate}
					/>
				);
			}
			
			return visibleWork;
		});
		
		return (
			<div className="work">
				<div className="wrap flex">
					<div className="work-filters flex">
						<h3>Filter Projects:</h3>
						{workFilters}
					</div>
					{workData}
				</div>
			</div>
		);
	}
}

export default Work;