import React from 'react';
import './css/hero.css'

class Hero extends React.Component {
	render() {
		return (
			<div className="grid-x align-middle hero__image">
				<div className="cell medium-6 medium-offset-3 hero__text">
					<h1 className="hero__headline">Did you know</h1>
					<hr className="hero__underline" />
					<h2>
						<ul>
							<li>...Dams can break</li>
							<li>...Broken dams are bad!</li>
							<li>...They can kill youuuuu!</li>
						</ul>
					</h2>
				</div>
			</div>
		);
	}
}

export default Hero;