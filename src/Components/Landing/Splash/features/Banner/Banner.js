import React from 'react';
import CoruscatingGem from "../CoruscatingGem/CoruscatingGem";
import Typewrite from "../Typewrite/Typewrite";

import './Banner.scss';
const Banner = () => {
	const info = Object.seal({
		author: 'I\'m Dustin',
		welcomeMsg: 'Hi There!',
		subMessage: 'And Welcome to the Compendium of my Interests, Work, & Accomplishments'
	});
	return (
		<div className="banner">
			<h2 className="welcomeFromAuthor">
				{`${info.welcomeMsg}`}
			</h2>
			<h2 className="welcomeFromAuthor">
				{`${info.author}`}
			</h2>
			<CoruscatingGem />
			<Typewrite />
			<div className="landingContainer-bottom">
				<div className="landing-subheader">
					<h4 className="banner-heading">
						{info.subMessage}
					</h4>
				</div>
				<div className="foxMinesGems">
					<img
						src="https://www.dropbox.com/s/giildg422g6zf45/FoxMinesGemPower.gif?raw=1"
						className="img-fluid foxMinesGemPower" alt="Anthropomorphic Fox Mining Crystals"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;