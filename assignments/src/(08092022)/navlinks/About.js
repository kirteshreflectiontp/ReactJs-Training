import React, { useContext } from 'react';
import Header from '../header'
import UserContext from '../UserContext';


const About = (props) => {
    props.setInitialPage('About');
    const {loggedInUser} =  useContext(UserContext);
   
    return (
        <div>
            <Header/>
           
            <br/>
            <br/>
            <div  className='data_user'>Name:{loggedInUser?.fullname}  </div>
            <br/>
            <div  className='data_user'> Address:{loggedInUser?.address}</div>
            <br/>
            <div  className='data_user'>UserName:{loggedInUser?.username}</div>
            
        </div>
    );
};

export default About;