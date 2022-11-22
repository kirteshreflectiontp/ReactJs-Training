import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Mainfrontbg from '../Components/Mainfrontbg'
import Projectcard from '../Components/Projectcard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Mainfrontbg heading="PROJECTS"text="Some of my recent works"/>
      <Projectcard/>
      <Footer/>   
    </div>
  )
}

export default Project