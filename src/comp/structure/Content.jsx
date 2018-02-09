import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import CaseStudy from '../pages/CaseStudy';
import Contact from '../pages/Contact';

class Content extends Component {
	render() {
		let navActive = "",
			curComp = null;
		
		if (this.props.pageTrans === true) {
			navActive = " content-transition";
		}

		if (this.props.curPage === "home") {
			curComp = (
				<Home
					pageTrans={this.props.pageTrans}
					navigate={this.props.navigate}
				/>
			);
		} else if (this.props.curPage === "about") {
			curComp = (
				<About
					pageTrans={this.props.pageTrans}
					data={this.props.data.dbData}
				/>
			);
		} else if (this.props.curPage === "work") {
			curComp = (
				<Work 
					pageTrans={this.props.pageTrans} 
					workData={this.props.data.workData} 
					setCaseData={this.props.setCaseData} 
					navigate={this.props.navigate} 
				/>
			);
		} else if (this.props.curPage === "casestudy") {
			curComp = (
				<CaseStudy
					data={this.props.data.workData}
					caseNext={this.props.caseNext}
					casePrev={this.props.casePrev}
					caseInd={this.props.caseInd}
					navigate={this.props.navigate}
				/>
			);
		} else if (this.props.curPage === "contact") {
			curComp = (
				<Contact
					pageTrans={this.props.pageTrans}
					data={this.props.data.dbData}
				/>
			);
		}
		
		return (
			<section className={"content" + navActive}>
				{curComp}
			</section>
		);
	}
}

export default Content;