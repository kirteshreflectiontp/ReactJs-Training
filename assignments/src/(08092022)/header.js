import Search from './Search';
import './header.css';
import React,{useState} from 'react';
import Nav from './navlinks/nav';


const Header = () => {
    const [dp, setDp] = useState(false);
   
    
    return (
<>
<div className="parent_header">
    <div>
        <span className='logo'>LoGo</span>
        <span><Search/></span>
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