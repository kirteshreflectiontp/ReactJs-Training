
import {Outlet,Link} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <>
        <div>
            <span className='Nav-Li'><Link to="/Home">Home</Link></span>
            <span className='Nav-Li'><Link to="/About">About</Link></span>
            <span className='Nav-Li'><Link to="/Contact">Contact</Link></span>
        </div>
        <Outlet/>
        </>
    );
};

export default Nav;