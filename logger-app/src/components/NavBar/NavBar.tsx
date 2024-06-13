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
                    <NavLink to="/HallMonitor" className="nav-link">Hall Monitor View</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/1101" className="nav-link">Teacher View</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;