import React from 'react';
import { SlideTextProps } from '../interfaces/interfaces';

const Slide = ({ mainText, subText, index, bgImagePath }: SlideTextProps) => {
	return (
		<>
			<div
				className={`slide-item`}
				style={{ backgroundImage: `url(${bgImagePath})` }}
			>
				<div className={`slider-text-container ${index === 1 ? 'white' : ''}`}>
					<div className={`slider-logo ${index === 1 ? 'white' : ''}`}>o1.</div>
					<div className="slider-heading">
						<p className="main-text">{mainText}</p>
						<p className="sub-text">{subText}</p>
						<p className="company-text">
							Keune <span className="bold">Design</span>
						</p>
					</div>
					<div className="cta-container">
						<div className={`line ${index === 1 && 'whiteBg'}`}></div>
						<div className={`circle  ${index === 1 ? 'white' : ''}`}>
							<p>{`>`}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slide;
