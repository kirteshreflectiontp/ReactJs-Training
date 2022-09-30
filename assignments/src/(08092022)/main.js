import './main.css';
import React, { useContext, useEffect, useState } from 'react'
import Banner from './banner'
import Videoblock from './Videoblock';
import Profileimg from './images/profileimg.jpg'
import {Link } from 'react-router-dom';
import UserContext from './UserContext';



const Main = () => {
    const currentUser = sessionStorage.username;
    const userList = JSON.parse(localStorage.userList);
    const [userData,setUserData] = useState();
    const {loggedInUser,setLoggedInUser} = useContext(UserContext)
    
    useEffect(() => {
        userList?.map((user) => {
            let logUser = JSON.parse(user);
            if(logUser.username === currentUser){
                setUserData(logUser);
                setLoggedInUser(logUser)
            }
        })
    },[!userData])
     
    return (
<>
<div>
    <Banner/>
   
    <div className="profile_block">
        <div> <img className='profile-img' src={Profileimg} alt='img'/></div>
        <div className='profile_block2'>
        <div className='profile_name' >
           <div className='name'>{loggedInUser?.fullname}</div> 
           <div  className='town'>{loggedInUser?.address}</div> 
        </div>
        <div>
         <button className='profile_button'><i class="fa-duotone fa-pen-line"><Link to="/Editprofile">Edit Profile</Link></i></button>
         
        </div>
        </div>
    </div>
    <div>
        <Videoblock/>
    </div>
</div>
</>
)
}
export default Main;
