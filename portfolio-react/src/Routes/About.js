import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Mainfrontbg from '../Components/Mainfrontbg'
import Aboutcontent from '../Components/Aboutcontent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Mainfrontbg heading="ABOUT ME"text="Im a React Front-End Developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About