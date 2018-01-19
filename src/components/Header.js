import React, { Component } from 'react';

class Header extends Component {
  render() {
		return (
			<header className="header" id="header">
				<div className="wrap flex">
					<a className="title-container flex" id="header-title" href="#">
						<h1>Danny Burton</h1>
						<h2>front end web developer</h2>
					</a>

					<nav>
						<ul>
							<li>
								<a href="#about">about</a>
							</li>
							<li>
								<a href="#work">work</a>
							</li>
							<li>
								<a href="#contact">contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
  }
}

export default Header;