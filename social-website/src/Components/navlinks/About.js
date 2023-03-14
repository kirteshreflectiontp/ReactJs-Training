import React, { useContext } from 'react';
import Header from '../header'
import UserContext from '../UserContext';


const About = (props) => {
    props.setInitialPage('About');
    const {loggedInUser} =  useContext(UserContext);
   
    return (
        <div >
            <Header/>
            <div className='show-container'>
            <div  className='data_user'><div>Name:</div><div>{loggedInUser?.fullname} </div> </div>
            <div  className='data_user'> <div>Address:</div><div>{loggedInUser?.address}</div></div>
            <div  className='data_user'><div>UserName:</div><div>{loggedInUser?.username}</div></div>
            </div>
        </div>
    );
};

export default About;