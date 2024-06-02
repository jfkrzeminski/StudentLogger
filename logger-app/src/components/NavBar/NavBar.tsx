import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className='nav-box p-2'>
            <ul className='m-0'>
                <li className='nav-item'>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;