import React, { useEffect, useState } from 'react';
import Header from '../header'

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
          
          <div className="show-container">
           <div className='data_user'><div>Email:</div><div>{userData?.email}</div> </div>
           
           <div  className='data_user'><div>Mobile:</div><div>{userData?.mobilenumber} </div></div>
           </div>
        </div>
    );
};

export default Contact;