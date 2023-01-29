import React from 'react';

const GalleryItem3 = ({
	bgImageUrl,
	text,
}: {
	bgImageUrl: string;
	text: string;
}) => {
	return (
		<div
			className="galleryItem3-container"
			style={{ backgroundImage: `url(${bgImageUrl})` }}
		>
			<div className="galleryItem3-text-container">
				<div className="gallerySectionText-container">
					Keune <br />
					{text}
				</div>
				<div className="gallery3-cta-container">
					<p className="gallery-cta-text">Odkryj Serie</p>
					<p>{'>'}</p>
				</div>
			</div>
		</div>
	);
};

export default GalleryItem3;
