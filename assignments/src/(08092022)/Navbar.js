import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Home from './navlinks/Home';
import About from './navlinks/About';
import Contact from './navlinks/Contact';



function Navbar() {
    return (
     <BrowserRouter>
      <div>
        
        <Routes>
            <Route index element ={<Home/>}/>
            <Route path="Home" element ={<Home/>}/>
            <Route path="About" element ={<About/>}/>
            <Route path="Contact" element ={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
        
    );
};

export default Navbar;
