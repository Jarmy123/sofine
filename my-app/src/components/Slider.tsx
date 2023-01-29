import React, { useState } from 'react';
import '../styles/main.css';
import Navbar from './Navbar';
import firstSlide from '../images/slide1-big.jpg';
import secondSlide from '../images/slide2-big.jpg';
import { SlideTexts } from '../interfaces/interfaces';
import Slide from './Slide';

const Slider = () => {
	const slidesData: SlideTexts[] = [
		{
			mainText: 'Bez Kompromisu.',
			subText: 'Idealnie takie jak lubisz.',
			bgImagePath: firstSlide,
		},
		{
			mainText: 'Lorem Ipsum.',
			subText: 'Lorem ipsum dolor sit amet.',
			bgImagePath: secondSlide,
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePreviousClick = () => {
		setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1);
	};

	const handleNextClick = () => {
		setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
	};

	return (
		<div className="slider">
			<Navbar index={currentSlide} />
			<div
				className="slide"
				style={{
					transform: `translateX(-${currentSlide * 100}vw)`,
				}}
			>
				{slidesData.map((slideData, index) => (
					<Slide
						mainText={slideData.mainText}
						subText={slideData.subText}
						index={index}
						bgImagePath={slideData.bgImagePath}
					/>
				))}
			</div>
			<button
				className={`arrow arrow-next ${currentSlide === 1 ? 'white' : ''}`}
				onClick={handlePreviousClick}
			>
				{`>`}
			</button>
			<button
				className={`arrow arrow-prev ${currentSlide === 1 ? 'white' : ''}`}
				onClick={handleNextClick}
			>
				{`<`}
			</button>
		</div>
	);
};

export default Slider;
