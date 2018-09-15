import React from 'react';
import './css/hero.css'

class Hero extends React.Component {
	render() {
		return (
			<div className="grid-x align-middle hero__image">
				<div className="cell medium-6 medium-offset-3 hero__text">
					<h1 className="hero__headline">Did you know</h1>
					<hr className="hero__underline" />
					<h5>
						<ul>
							<li>There are over 1400 dams in California.</li>
							<li>90% are considered to be safe by the Office of Dam Safety, but that still leaves 97 dams in questionable condition.</li>
							<li>Out of these, 61 have high or extremely high downstream hazard.</li>
							<li>See the map below to check if one of these dams is near you, and what you can do about it.</li>
						</ul>
					</h5>
				</div>
			</div>
		);
	}
}

export default Hero;