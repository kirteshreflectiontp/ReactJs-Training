import {Outlet,Link} from 'react-router-dom';
import React from 'react';
const Nav = () => {
    return (
        <>
        <ul className='nav_list'>
            <li className='Nav-Li'><Link to="/Home"className='Nav-Li'>Home</Link></li>
            <li className='Nav-Li'><Link to="/About"className='Nav-Li'>About</Link></li>
            <li className='Nav-Li'><Link to="/Contact"className='Nav-Li'>Contact</Link></li>
            <li className='Nav-Li'><Link to="/"className='Nav-Li'>Logout</Link></li>
        </ul>
        <Outlet/>
        </>
    );
};

export default Nav;