import React from 'react';
import './index.css';
import Home from './Routes/Home'
import About from './Routes/About'
import ContactUs from './Routes/ContactUs'
import Project from './Routes/Project'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/project" element = {<Project/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contactus" element = {<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
