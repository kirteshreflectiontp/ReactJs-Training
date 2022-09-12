import './main.css';
import React from 'react'
import Banner from './banner'

import Profileimg from './images/profileimg.jpg'
import Videonav from './videonav';


const Main = () => {

    return (
<>
<div>
    <Banner/>
   
    <div className="profile_block">
        <div> <img className='profile-img' src={Profileimg} alt='img'/></div>
        <div className='profile_block2'>
        <div className='profile_name' >
           <div className='name'>Wilson Franci</div> 
           <div  className='town'>Minnesota,MN</div> 
        </div>
        <div>
         <button className='profile_button'><i class="fa-duotone fa-pen-line"></i> EDIT PROFILE</button>
         
        </div>
        </div>
    </div>
    <div>
        <Videonav/>
    </div>
</div>
</>
)
}
export default Main;
