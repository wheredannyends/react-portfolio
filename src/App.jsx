import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

//pieces-card-image

class App extends Component {
	constructor(props) {
		super(props);
		
		var scroll = new SmoothScroll('a[href*="#"]', {offset:90});
		
		window.addEventListener('scroll', function(){
			const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			
			const heroTitle1 = document.getElementById("hero-title-1"),
				  heroTitle2 = document.getElementById("hero-title-2"),
				  heroBut = document.getElementById("hero-button"),
				  header = document.getElementById("header"),
				  headerTitle = document.getElementById("header-title");
			
			if (scrollTop > window.innerHeight/5) {
				heroTitle1.style.transform = "rotateY(90deg)";
				heroTitle2.style.transform = "rotateY(-90deg)";
				heroBut.style.transform = "rotateY(-90deg)";
			} else {
				heroTitle1.style.transform = "none";
				heroTitle2.style.transform = "none";
				heroBut.style.transform = "none";
			}
			
			if (scrollTop >= window.innerHeight/10*9.5-91) {
				header.style.backgroundColor = "#f2f2f2";
				headerTitle.classList.add("floating");
			} else {
				header.style.backgroundColor = "rgba(242,242,242,0)";
				headerTitle.classList.remove("floating");
			}
		});
		
		this.state = {
			services: [
				{
					heading: "UX/UI Design",
					icon: "ion ion-paintbrush",
					iconEffect: "icon-spin",
					description: "I design simple, intuitive interfaces that get the end-user from point A to point B",
				},
				{
					heading: "Web Development",
					icon: "ion ion-code-working",
					iconEffect: "icon-spin",
					description: "I write efficient code to build responsive websites that work on every device.",
				},
				{
					heading: "Digital Design",
					icon: "ion ion-lightbulb",
					iconEffect: "icon-spin",
					description: "I'm not limited to the web. If it can be made on a computer, I'm your guy.",
				}
			],
			skills: [
				{
					name: "HTML5",
					class: "devicon-html5-plain"
				},
				{
					name: "CSS3",
					class: "devicon-css3-plain"
				},
				{
					name: "JavaScript",
					class: "devicon-javascript-plain"
				},
				{
					name: "PHP",
					class: "devicon-php-plain"
				},
				{
					name: "Illustrator",
					class: "devicon-illustrator-plain"
				},
				{
					name: "Photoshop",
					class: "devicon-photoshop-plain"
				},
				{
					name: "Git",
					class: "devicon-git-plain"
				},
				{
					name: "WordPress",
					class: "devicon-wordpress-plain"
				},
				{
					name: "Sass",
					class: "devicon-sass-original"
				},
				
				{
					name: "jQuery",
					class: "devicon-jquery-plain"
				},
				{
					name: "React",
					class: "devicon-react-original"
				},
				{
					name: "Bootstrap",
					class: "devicon-bootstrap-plain"
				}
			],
			pieces: [
				{
					title: "DAQI Izakaya",
					subtitle: "Restaurant Website",
					role: "Design, Development",
					website: "http://daqi.dannyburton.ca",
					description: "The website for DAQI Izakaya, a fictional restaurant, was built as the combined final project for 4 courses in my first term at BCIT. The requirements for the project spanned the entire design and development process, including UX research, UI design, and development.",
					tech: [
						"devicon-illustrator-plain",
						"devicon-html5-plain",
						"devicon-css3-plain",
						"devicon-javascript-plain",
						"devicon-jquery-plain",
						"devicon-git-plain"
					],
					images: "daqi-mockup.png"
				},
				{
					title: "Berriton",
					subtitle: "Interactive Story Game",
					role: "UI Design, Development",
					website: "http://berriton.dannyburton.ca",
					description: "Berriton was the combined final project for 4 courses in my second term at BCIT. I was in charge of the UI design and development aspects. Our team was required to create an interactive mobile web application and spanned the entire design and development process from ideation to deployment.",
					tech: [
						"devicon-illustrator-plain",
						"devicon-html5-plain",
						"devicon-css3-plain",
						"devicon-sass-original",
						"devicon-javascript-plain",
						"devicon-git-plain"
					],
					images: "berriton-mockup.png"
				},
				{
					title: "Analogue Moderne",
					subtitle: "Website Redesign",
					role: "Design, Development",
					website: "http://www.analoguemoderne.com/",
					description: "I was hired to build a website for Analogue Moderne, a Vancouver-based integrated media design and installation company. I worked with the client to design a website that captured the spirit of the company, and position them in the high-class home automation market.",
					tech: [
						"devicon-illustrator-plain",
						"devicon-photoshop-plain",
						"devicon-html5-plain",
						"devicon-css3-plain",
						"devicon-javascript-plain",
						"devicon-jquery-plain"
					],
					images: "am-mockup.png"
				},
			],
			social: [
				{
					icon: "ion ion-social-linkedin",
					url: "https://www.linkedin.com/in/wheredannyends/"
				},
				{
					icon: "ion ion-social-github",
					url: "https://github.com/wheredannyends"
				},
				{
					icon: "ion ion-social-instagram",
					url: "http://www.instagram.com/index.psd/"
				},
			]
		}
	}
	
	render() {
		return (
			<main className="app">
				<Header />
				<Hero />
				<About
					services={this.state.services}
					skills={this.state.skills}
				/>
				<Work
					pieces={this.state.pieces}
				/>
				<Contact />
				<Footer
					social={this.state.social}
				/>
			</main>
	);	
  }
}

export default App;
