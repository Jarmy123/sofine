import React, { useState } from 'react';
import Dropdown from './Dropdown';

const MenuItem = ({
	name,
	dropdownItems,
}: {
	name: string;
	dropdownItems?: string[];
}) => {
	const [isDropdownOpen, setIsDropDownOpen] = useState(false);
	return (
		<div className="menuItem-box">
			<p
				className="menuItem"
				onClick={() => {
					setIsDropDownOpen(!isDropdownOpen);
				}}
			>
				{name}
			</p>
			{isDropdownOpen && dropdownItems !== undefined ? (
				<Dropdown items={dropdownItems} />
			) : (
				''
			)}
		</div>
	);
};

export default MenuItem;
