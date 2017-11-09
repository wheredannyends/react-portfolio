import React, { Component } from 'react';

class Header extends Component {
  render() {
		return (
			<header className="header" id="header">
				<div className="wrap flex">
					<a className="title-container flex" id="header-title" href="#hero">
						<h1>Danny Burton</h1>
						<h2>web designer</h2>
					</a>

					<nav className="title-nav">
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