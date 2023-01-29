import React from 'react';
import youtube from '../images/yt.svg';
import youtubeWhite from '../images/yt_WHITE.svg';
import facebook from '../images/fb.svg';
import facebookWhite from '../images/fb_WHITE.svg';
import insta from '../images/insta.svg';
import instaWhite from '../images/insta_WHITE.svg';
import twitter from '../images/twitter.svg';
import twitterWhite from '../images/twitter_WHITE.svg';

const Socials = ({ index }: { index: number }) => {
	return (
		<>
			<div className="socials-container">
				<img
					src={index === 0 ? facebook : facebookWhite}
					alt="facebook"
					className="social-icon facebook"
				/>
				<img
					src={index === 0 ? insta : instaWhite}
					alt="insta"
					className="social-icon insta"
				/>
				<img
					src={index === 0 ? twitter : twitterWhite}
					alt="twitter"
					className="social-icon twitter"
				/>
				<img
					src={index === 0 ? youtube : youtubeWhite}
					alt="youtube"
					className="social-icon youtube"
				/>
			</div>
		</>
	);
};

export default Socials;
