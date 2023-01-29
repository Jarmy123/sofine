import React from 'react';

const Dropdown = ({ items }: { items: string[] }) => {
	return (
		<>
			<div className="dropdown-box">
				{items.map((dropdownItem) => (
					<div className="dropdown-item">{dropdownItem}</div>
				))}
			</div>
		</>
	);
};

export default Dropdown;
