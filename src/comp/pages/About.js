import React, { Component } from 'react';

class About extends Component {
	render() {
		let compDisp = null;
		
		if (this.props.pageTrans === false) {
			compDisp = (
				<div className="about">
					<div className="wrap flex">
						<div className="profile flex">
							<img src={require('../../img/db/headshot_sq.jpg')} alt="Headshot" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione a vel dicta voluptate distinctio totam, hic sunt, cumque, sint veniam suscipit! Nostrum laborum officia error delectus, architecto cumque perferendis iure, eos aliquid, consectetur voluptatum fuga recusandae commodi hic dicta temporibus esse alias. Assumenda placeat minus repellat pariatur eaque laudantium similique nisi iure, suscipit asperiores! Cum fugiat dignissimos, accusantium aperiam perspiciatis atque tenetur sapiente, perferendis repellat nostrum assumenda similique cupiditate sint pariatur natus dolorem quo distinctio voluptate illum harum. Quam facilis pariatur temporibus ipsam possimus nam, perferendis accusamus. Architecto eum alias quis soluta nobis corporis quas? Iusto rerum debitis quidem minima!
								</p>
						</div>
					</div>
				</div>
			);
		}
		
		return compDisp;
	}
}

export default About;