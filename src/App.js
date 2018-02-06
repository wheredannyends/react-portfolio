import React, { Component } from 'react';

import Header from './comp/structure/Header';
import Background from './comp/structure/Background';
import Content from './comp/structure/Content';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			curPage: "work",
			curBg: "work",
			pageTrans: false,
			caseInd: 0,
			data: {
				dbData: {
					facts: [
						{
							key: "Name",
							val: "Danny Burton",
						},
						{
							key: "Location",
							val: "Vancouver, BC, Canada",
						},
						{
							key: "Education",
							val: "British Columbia Institute of Technology",
							val2: "Digital Design & Development - Diploma",
						},
					],
					social: [
						{
							url: "https://www.linkedin.com/in/wheredannyends/",
							icon: "icon ion-social-linkedin",
						},
						{
							url: "http://www.instagram.com/index.psd/",
							icon: "icon ion-social-instagram",
						},
						{
							url: "http://github.com/wheredannyends",
							icon: "icon ion-social-github",
						},
						{
							url: "http://codepen.io/wheredannyends/",
							icon: "icon ion-social-codepen",
						},
					]
				},
				workData: [
					{
						title: "Berriton",
						subtitle: "Interactive Story Game",
						role: "Development, UI Design",
						timeline: "January - May 2017",
						website: "http://www.dannyburton.ca/berriton",
						description: "Berriton was the combined final project for 4 courses in my second term at BCIT. I was in charge of the UI design and development aspects. Our team was required to create an interactive mobile web application and spanned the entire design and development process from ideation to deployment.",
						process: "Berriton was the combined final project for 4 courses in my second term at BCIT. I was in charge of the UI design and development aspects. Our team was required to create an interactive mobile web application and spanned the entire design and development process from ideation to deployment.",
						tech: [
							{
								title: "HTML5",
								icon: "devicon-html5-plain"
							},
							{
								title: "CSS3",
								icon: "devicon-css3-plain"
							},
							{
								title: "Sass",
								icon: "devicon-sass-original"
							},
							{
								title: "JavaScript",
								icon: "devicon-javascript-plain"
							},
							{
								title: "Git",
								icon: "devicon-git-plain"
							}
						],
						images: [
							"berriton-mockup-0.png",
							"am-mockup-0.png",
							"daqi-mockup-0.png",
							"am-mockup-1.png",
						]
					},
					{
						title: "Proxy",
						subtitle: "iOS/Android App",
						role: "Front-End Development",
						timeline: "September - December 2017",
						website: "exp://exp.host/@alessandro92/proxy",
						description: "Proxy is an app that allows users to set location-based alarms and notifications to let them make the most of their time on transit.",
						process: "Proxy is an app that allows users to set location-based alarms and notifications to let them make the most of their time on transit.",
						tech: [
							{
								title: "React Native",
								icon: "devicon-react-original"
							},
							{
								title: "Google APIs",
								icon: "devicon-google-plain"
							},
							{
								title: "JavaScript",
								icon: "devicon-javascript-plain"
							},
							{
								title: "Git",
								icon: "devicon-git-plain"
							},
							{
								title: "Slack",
								icon: "devicon-slack-plain"
							},
						],
						images: [
							"proxy-mockup-0.png",
							"am-mockup-0.png",
							"daqi-mockup-0.png",
							"am-mockup-1.png",
						]
					},
					{
						title: "DAQI Izakaya",
						subtitle: "Restaurant Website",
						role: "Development, Design",
						timeline: "September - December 2016",
						website: "http://www.dannyburton.ca/daqi",
						description: "The website for DAQI Izakaya, a fictional restaurant, was built as the combined final project for 4 courses in my first term at BCIT. The requirements for the project spanned the entire design and development process, including UX research, UI design, and development.",
						process: "The website for DAQI Izakaya, a fictional restaurant, was built as the combined final project for 4 courses in my first term at BCIT. The requirements for the project spanned the entire design and development process, including UX research, UI design, and development.",
						tech: [
							{
								title: "Illustrator",
								icon: "devicon-illustrator-plain"
							},
							{
								title: "HTML5",
								icon: "devicon-html5-plain"
							},
							{
								title: "CSS3",
								icon: "devicon-css3-plain"
							},
							{
								title: "jQuery",
								icon: "devicon-jquery-plain"
							},
							{
								title: "Git",
								icon: "devicon-git-plain"
							}
						],
						images: [
							"daqi-mockup-0.png",
							"am-mockup-0.png",
							"berriton-mockup-0.png",
							"am-mockup-1.png",
						]
					},
					{
						title: "Analogue Moderne",
						subtitle: "Website Redesign",
						role: "Front-End Development",
						timeline: "December 2016",
						website: "http://www.analoguemoderne.com",
						description: "I was hired to build a website for Analogue Moderne, a Vancouver-based integrated media design and installation company. I worked with the client to design a website that captured the spirit of the company, and position them in the high-class home automation market.",
						process: "I was hired to build a website for Analogue Moderne, a Vancouver-based integrated media design and installation company. I worked with the client to design a website that captured the spirit of the company, and position them in the high-class home automation market.",
						tech: [
							{
								title: "Photoshop",
								icon: "devicon-photoshop-plain"
							},
							{
								title: "HTML5",
								icon: "devicon-html5-plain"
							},
							{
								title: "CSS3",
								icon: "devicon-css3-plain"
							},
							{
								title: "JavaScript",
								icon: "devicon-javascript-plain"
							},
							{
								title: "jQuery",
								icon: "devicon-jquery-plain"
							}
						],
						images: [
							"am-mockup-0.png",
							"berriton-mockup-0.png",
							"daqi-mockup-0.png",
							"am-mockup-1.png",
						]
					},
				],
			},
		}
	}
	
	navigate = (path) => {
		if ((path === "casestudy" && this.state.curPage === "work") || (path === "work" && this.state.curPage === "casestudy")) {
			this.setState({
				pageTrans: true,
			});
			
			setTimeout(() => {
				this.setState({
					curPage: path,
					curBg: path,
					pageTrans: false,
				});
			}, 300);
		} else if (path === "casestudy" && this.state.curPage === "casestudy") {
			this.setState({
				pageTrans: true,
			});
			
			setTimeout(() => {
				this.setState({
					curPage: path,
					curBg: path,
					pageTrans: false,
				});
			}, 300);
		} else if (path !== this.state.curPage) {
			this.setState({
				pageTrans: true,
				
			});
			
			setTimeout(()=>{
				this.setState({
					curBg: path,
				});
			}, 200);
			
			setTimeout(() => {
				this.setState({
					curPage: path,
				});

				setTimeout(() => {
					this.setState({
						pageTrans: false,
					});
				}, 500);
			}, 500);
		}
	}
	
	setCaseData = (ind) => {
		this.setState({
			caseInd: ind,
		});
	}
	
	caseNext = (nextInd) => {
		let newInd = nextInd;
		
		if (nextInd === this.state.data.workData.length) {
			newInd = 0;
		}
		
		setTimeout(() => {
			this.setState({
				caseInd: newInd,
			});
		}, 300);
	}
	
	render() {
		return (
			<main className="main-container">
				<Background
					curPage={this.state.curPage}
					curBg={this.state.curBg}
				/>
				<Header
					curPage={this.state.curPage}
					navigate={this.navigate}
				/>
				<Content
					navigate={this.navigate}
					curPage={this.state.curPage}
					pageTrans={this.state.pageTrans}
					data={this.state.data}
					setCaseData={this.setCaseData}
					caseData={this.state.caseData}
					caseInd={this.state.caseInd}
					caseNext={this.caseNext}
				/>
			</main>
		);
	}
}

export default App;
