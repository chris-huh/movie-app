import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<nav className='navbar'>
				<h1 id='navbar-logo'>CHRIS HUH</h1>
				<ul className='nav-menu'>
					<li>
						<Link className='link' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='link' to='/about'>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
