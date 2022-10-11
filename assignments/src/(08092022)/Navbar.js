import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Home from './navlinks/Home';
import About from './navlinks/About';
import Contact from './navlinks/Contact';
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react';
import UserContext from './UserContext';
import ContactContext from './ContactContext';
import Editprofile from './Editprofile';
import VideoContext from './VideoContext';
function Navbar() {
  const [initialPage,setInitialPage] = useState('login');
  const [newNumber,setNewNumber] = useState('');
  const [currentUser, setcurrentUser] = useState(sessionStorage?.username);
  const [videos, setVideos] = useState(localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')): []);
   const setCurrentUserData = (data) => {
    setcurrentUser(data)
  }
  const setMobileNumber = (number) => {
    setNewNumber(number);
  }
  const setUserVideos = (videoList) => {
    setVideos(videoList)
  }
    return (
     <BrowserRouter>
     <UserContext.Provider value = {{loggedInUser:currentUser, setLoggedInUser : setCurrentUserData}}>
     <VideoContext.Provider value = {{videoData:videos, setVideoData: setUserVideos}}>
      <ContactContext.Provider value = {{mobilenumber:newNumber,setMobileNumber}}>
      <div>
        {(initialPage !== 'login' && initialPage !== 'signup' )}
        <Routes>
            <Route index element ={<Login setInitialPage={setInitialPage}/>}/>
            <Route path="Signup" element ={<Signup setInitialPage={setInitialPage}/>}/>
            <Route path="Home" element ={<Home setInitialPage={setInitialPage}/>}/>
            <Route path="About" element ={<About setInitialPage={setInitialPage}/>}/>
            <Route path="Contact" element ={<Contact setInitialPage={setInitialPage}/>}/>
            <Route path ="Editprofile" element ={<Editprofile setInitialPage={setInitialPage}/>}/>
        </Routes>
      </div>
      </ContactContext.Provider>
      </VideoContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
        
    );
};

export default Navbar;
