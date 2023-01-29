import React from 'react';
import GalleryItem1 from './GalleryItem1';
import GalleryItem2 from './GalleryItem2';
import GalleryItem3 from './GalleryItem3';
import carePhoto from '../images/01_care.jpg';
import blendPhoto from '../images/03_blend_1.jpg';
import koloryzacjaPhoto from '../images/04_koloryzacja.jpg';
import designPhoto from '../images/02_design.jpg';
import soPure from '../images/05_so_pure.jpg';

const Gallery = () => {
	return (
		<>
			<div className="gallery-section">
				<GalleryItem1 />
				<GalleryItem2 bgImageUrl={carePhoto} text="Care" />
			</div>
			<div className="gallery-section">
				<GalleryItem3 bgImageUrl={designPhoto} text="Design" />
				<GalleryItem2 bgImageUrl={blendPhoto} text="Blend" />
			</div>
			<div className="gallery-section">
				<GalleryItem2 bgImageUrl={koloryzacjaPhoto} text="Koloryzacja" />
				<GalleryItem3 bgImageUrl={soPure} text="So Pure" />
			</div>
		</>
	);
};

export default Gallery;
