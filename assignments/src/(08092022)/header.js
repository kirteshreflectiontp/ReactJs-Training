import Inputprops from '../(30082022)/inputprops';
import './header.css';
import React,{useState} from 'react';
import Nav from './navlinks/nav';


const Header = () => {
    const [dp, setDp] = useState(true);
    
    return (
<>
<div className="parent_header">
    <div>
        <span className='logo'>LoGo</span>
        <span><Inputprops className='search_input' type="text" placeholder="Search Users by Name" /><i class="fa-solid fa-magnifying-glass search_icon"></i></span>
    </div>
   
    <div className='header_clicks'>
        <div><button className='header_button'><i class="fa-solid fa-video-plus"></i>UPLOAD VIDEO</button></div>
        <div><button className='dots_button' onClick={(e) => {
          e.preventDefault();
          setDp(!dp);
        }}><span><i class="fa-solid fa-ellipsis-vertical "></i></span></button></div>
       {dp && <div><Nav/></div>}
    </div>
</div>
</>
    )
}
export default Header;