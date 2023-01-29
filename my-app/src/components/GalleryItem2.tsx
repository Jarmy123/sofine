import React from 'react';

const GalleryItem2 = ({
	bgImageUrl,
	text,
}: {
	bgImageUrl: string;
	text: string;
}) => {
	return (
		<div
			className="galleryItem2-container"
			style={{ backgroundImage: `url(${bgImageUrl})` }}
		>
			<div className="galleryItem2-text-container">
				<div className="gallerySectionText-container">
					Keune <br />
					{text}
				</div>
				<div className="gallery-cta-container">
					<p className="gallery-cta-text">Odkryj Serie</p>
					<p>{'>'}</p>
				</div>
			</div>
		</div>
	);
};

export default GalleryItem2;
