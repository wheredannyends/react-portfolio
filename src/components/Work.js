import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class Work extends Component {
	render() {
		var piecesItems = this.props.pieces.map((obj, i)=>{
			var item = this.props.pieces[i];
			var piecesTech = this.props.pieces[i].tech.map((obj, t)=>{
				var techItem = this.props.pieces[i].tech[t];
				return (
					<i className={techItem} key={t} />
				)
			});
			
			return (
				<article className="pieces-card" key={i}>
						<div className="flex">
								<div className="pieces-card-left">
										<div className="flex">
												<h4>{item.title}</h4>
												<h5>{item.role}</h5>
												<p>{item.description}</p>
												<a href={item.website} target="_blank" rel="noopener noreferrer" className="button-primary">View Website</a>
										</div>
								</div>
								<div className="pieces-card-right">
										<div className="flex">
												<Zoom fraction={0.5}><img className="pieces-card-image" src={require('../assets/' + item.images)} alt="Portfolio Piece Example" />
													</Zoom>
										</div>
								</div>
						</div>
				</article>
			)
		});
		
		
		return (
			<section className="work" id="work">
				<div className="wrap flex">
					<h4>Recent Projects</h4>
					<h3>Allow my work to speak for itself.</h3>
					{piecesItems}
				</div>
			</section>
		);
		
	}
}

export default Work;