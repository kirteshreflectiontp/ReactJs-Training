import React, { useEffect, useState } from 'react';
import Header from '../header'


const About = (props) => {
    props.setInitialPage('About');
    const currentUser = sessionStorage.username;
    const userList = JSON.parse(localStorage.userList);
    const [userData,setUserData] = useState();
    useEffect(() => {
        userList?.map((user) => {
            let logUser = JSON.parse(user);
            if(logUser.username === currentUser){
                setUserData(logUser);
            }
        })
    },[userData])
    return (
        <div>
            <Header/>
           
            <br/>
            <br/>
            <div  className='data_user'>Name:{userData?.fullname}  </div>
            <br/>
            <div  className='data_user'> Address:{userData?.address}</div>
            <br/>
            <div  className='data_user'>UserName:{userData?.username}</div>
            
        </div>
    );
};

export default About;