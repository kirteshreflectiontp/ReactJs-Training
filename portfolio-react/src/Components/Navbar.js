import './Navbar.css'
import React, { useState } from 'react'
import{Link} from 'react-router-dom'
import{FaBars,FaTimes} from "react-icons/fa";
const Navbar = () => {
 const [click,setClick]= useState(false);
 const MobileClick = () => setClick(!click);
 const [color,setcolor]=useState(false);
 const ChangeColor = () =>{
    if(window.scrollY >=1){
        setcolor(true);
    }else{
        setcolor(false);
    }
 };
window.addEventListener("scroll",ChangeColor);
  return (
    <div className={color?"header header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/contactus">Contact Me</Link>
            </li>
        </ul>
        <div className='mobile-nav' onClick={MobileClick}>
            {click ?
            (<FaTimes size={20} style={{color:"#fff"}}/>)
            :
            (<FaBars size={20} style={{color:"#fff"}}/>)
        }
        </div>
    </div>
  )
}

export default Navbar