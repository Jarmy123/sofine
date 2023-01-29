import React from 'react';
import logo from '../images/logo_KEUNE.svg';
import logoWhite from '../images/logo_KEUNE_WHITE.svg';
import { MenuItemInterface } from '../interfaces/interfaces';
import MenuItem from './MenuItem';
import Socials from './Socials';

const Navbar = ({ index }: { index: number }) => {
	const menuItems: MenuItemInterface[] = [
		{
			name: 'Nowości',
		},
		{
			name: 'Produkty',
			dropdownItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
		},
		{
			name: 'Trendy',
		},
		{ name: 'O firmie' },
		{
			name: 'Salony',
		},
		{
			name: 'Dustrybutorzy',
		},
		{ name: 'Kontakt' },
	];
	return (
		<>
			<nav className={`navbar-container ${index === 1 && 'white'}`}>
				<div className="logo-container">
					<img
						src={index === 0 ? logo : logoWhite}
						alt="logo"
						className="logo"
					/>
				</div>
				<div className="menuItems-container">
					{menuItems.map((menuItem) => (
						<MenuItem
							name={menuItem.name}
							dropdownItems={menuItem.dropdownItems}
						/>
					))}
					<Socials index={index} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
