import {Outlet,Link} from 'react-router-dom';
import React from 'react';
const Nav = () => {
    return (
        <>
        <ul className='nav_list'>
            <li className='Nav-Li'><Link to="/Home">Home</Link></li>
            <li className='Nav-Li'><Link to="/About">About</Link></li>
            <li className='Nav-Li'><Link to="/Contact">Contact</Link></li>
        </ul>
        <Outlet/>
        </>
    );
};

export default Nav;