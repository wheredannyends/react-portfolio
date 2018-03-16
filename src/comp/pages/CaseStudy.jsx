import React, { Component } from 'react';
import ReactGA from 'react-ga';

class CaseStudy extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curImg: this.props.data[this.props.caseInd].images[0],
			curImgInd: 0,
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
			
		ReactGA.event({
			category: 'Navigation',
			action: 'Viewed Case Study',
			label: this.props.data[nextInd].title
		});
	}
	
	imgChange = (ind) => {
		const imgArr = this.props.data[this.props.caseInd].images;
		
		if (ind < 0) {
			ind = imgArr.length - 1;
		} else if (ind > imgArr.length - 1) {
			ind = 0;
		}
		
		if (this.state.curImg !== imgArr[ind]) {
			this.setState({
				imgTrans: true,
			});

			setTimeout(() => {
				this.setState({
					curImg: imgArr[ind],
					curImgInd: ind,
					imgTrans: false,
				});
			}, 300);
		}
	}
	
	trackLink = (title) => {
		ReactGA.event({
			category: 'Viewed Completed Project',
			action: title
		});
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
				<div key={i} className="cs-gallery-thumb flex">
					<img src={require('../../img/work/mockups/' + obj)} alt={data.title + ' Image'} onClick={this.imgChange.bind(this, i)} />
				</div>
			);
		});
		
		const csDel = data.deliverables.map((obj, i) => {
			return (
				<li key={i}>{obj}</li>
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
							<h4>Back</h4>
						</div>
						<h1>{data.title}</h1>
						<div className="cs-header-button flex" onClick={this.handleNext.bind(this, (nextInd))}>
							<i className="icon ion-ios-arrow-thin-right"></i>
							<h4>{this.props.data[(nextInd)].title}</h4>
						</div>
					</div>
							
					<div className="cs-left flex">
						<div className="cs-left-image flex">
							<i className="icon ion-ios-arrow-left" onClick={this.imgChange.bind(this, (this.state.curImgInd - 1))}></i>
							<img src={require('../../img/work/mockups/' + this.state.curImg)} alt={data.title + ' Mockup'} className={imgTrans}/>
							<i className="icon ion-ios-arrow-right" onClick={this.imgChange.bind(this, (this.state.curImgInd + 1))}></i>
						</div>
						<div className="cs-gallery flex">
							{imgThumbs}
						</div>
						<a href={data.website} target="_blank" className="button" onClick={this.trackLink.bind(this, data.title)}>Visit Website</a>
					</div>
						
					<div className="cs-right flex">
						<h3 className="half">Timeline</h3>
						<p className="cs-right-body">{data.timeline}</p>
						<h3 className="half">Deliverables</h3>
						<ul className="cs-right-body cs-right-del">{csDel}</ul>
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