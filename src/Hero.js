import React from 'react';
import './css/hero.css'

class Hero extends React.Component {
	render() {
		return (
			<div className="hero__image">
				<div className="hero__text">
					<h1>
						<ul>
							<li>Did you know dams can break?</li>
							<li>Broken dams are bad!</li>
							<li>They can kill youuuuu...</li>
						</ul>
					</h1>
					
				</div>
			</div>
		);
	}
}

export default Hero;