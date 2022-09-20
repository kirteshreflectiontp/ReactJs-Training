import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Home from './navlinks/Home';
import About from './navlinks/About';
import Contact from './navlinks/Contact';
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react';



function Navbar() {
  const [initialPage,setInitialPage] = useState('login');
    return (
     <BrowserRouter>
      <div>
        {(initialPage !== 'login' && initialPage !== 'signup')}
        <Routes>
            <Route index element ={<Login setInitialPage={setInitialPage}/>}/>
            <Route path="Signup" element ={<Signup setInitialPage={setInitialPage}/>}/>
            <Route path="Home" element ={<Home setInitialPage={setInitialPage}/>}/>
            <Route path="About" element ={<About setInitialPage={setInitialPage}/>}/>
            <Route path="Contact" element ={<Contact setInitialPage={setInitialPage}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
        
    );
};

export default Navbar;
