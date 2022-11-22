import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Mainfrontbg from '../Components/Mainfrontbg'
import Contactform from '../Components/Contactform'
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <Mainfrontbg heading="CONTACT"text="Connect with me below"/>
      <Contactform/>
      <Footer/>   
    </div>
  )
}

export default ContactUs