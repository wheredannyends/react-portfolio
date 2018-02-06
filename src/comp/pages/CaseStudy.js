import React, { Component } from 'react';

class CaseStudy extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curImg: this.props.data[this.props.caseInd].images[0],
			imgTrans: false,
		}
	}
	
	handleNext = (nextInd) => {
		this.props.navigate("casestudy");
		this.props.caseNext(nextInd);
		setTimeout(() => {
			this.setState({
				curImg: this.props.data[nextInd].images[0],
			});
		}, 300);
	}
	
	imgChange = (imgInd) => {
		if (this.state.curImg !== this.props.data[this.props.caseInd].images[imgInd]) {
			this.setState({
				imgTrans: true,
			});

			setTimeout(() => {
				this.setState({
					curImg: this.props.data[this.props.caseInd].images[imgInd],
					imgTrans: false,
				});
			}, 300);
		}
	}
	
	render() {
		const caseInd = this.props.caseInd,
			  data = this.props.data[caseInd];
		
		let nextInd = caseInd + 1,
			imgTrans = "";
		
		const techItems = data.tech.map((obj, i) => {
			return (
				<article key={i} className="cs-right-tech-item flex">
					<i className={obj.icon}></i>
					<p>{obj.title}</p>
				</article>
			);
		});
		
		const imgThumbs = data.images.map((obj, i) => {
			return (
				<div className="cs-gallery-thumb flex">
					<img src={require('../../img/work/mockups/' + obj)} alt={data.title + ' Image'} onClick={this.imgChange.bind(this, i)} />
				</div>
			);
		});
		
		if (nextInd >= this.props.data.length) {
			nextInd = 0;
		}
	
		if (this.state.imgTrans) {
			imgTrans = " transition";
		}
		
		return (
			<div className="casestudy">
				<div className="wrap flex">
					<div className="cs-header flex">
						<div className="cs-header-button flex" onClick={this.props.navigate.bind(this, "work")}>
							<i className="icon ion-ios-close-empty"></i>
							<h4>Close</h4>
						</div>
						<h1>{data.title}</h1>
						<div className="cs-header-button flex" onClick={this.handleNext.bind(this, (nextInd))}>
							<i className="icon ion-ios-arrow-thin-right"></i>
							<h4>{this.props.data[(nextInd)].title}</h4>
						</div>
					</div>
							
					<div className="cs-left flex">
						<img src={require('../../img/work/mockups/' + this.state.curImg)} alt={data.title + ' Mockup'} className={"cs-left-image" + imgTrans}/>
						<div className="cs-gallery flex">
							{imgThumbs}
						</div>
						<a href={data.website} target="_blank" className="button">Visit Website</a>
					</div>
						
					<div className="cs-right flex">
						<h3 className="half">Role</h3>
						<p className="cs-right-body">{data.role}</p>
						<h3 className="half">Timeline</h3>
						<p className="cs-right-body">{data.timeline}</p>
						<h3>Background</h3>
						<p className="cs-right-body">{data.description}</p>
						<h3>Process</h3>
						<p className="cs-right-body">{data.process}</p>
						<div className="cs-right-tech flex">
							<h3>Technologies Used</h3>
							{techItems}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CaseStudy;