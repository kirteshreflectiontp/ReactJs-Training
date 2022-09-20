import React, { useEffect, useState } from 'react';
import Header from '../header'
import Banner from '../banner'

const Contact = (props) => {
    props.setInitialPage('Contact');
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
           <Banner/>
           <br/>
           <br/>
           <div className='data_user'>Email:{userData?.email} </div>
           <br/>
           <div  className='data_user'>Mobile:{userData?.mobilenumber} </div>

        </div>
    );
};

export default Contact;