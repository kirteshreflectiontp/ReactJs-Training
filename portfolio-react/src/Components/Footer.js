import './Footer.css'
import React from 'react'
import { FaHome,FaPhone,FaMailBulk,FaLinkedin } from "react-icons/fa"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <div className='left-div'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "32px" }} />
                     <div>
                        <p>Tupe complex,wing 4,flat No.8,Gopalpatti Manjri road pune</p>
                        <p>Pune Maharashtra India</p>
                    </div>
                    </div>
                    <div className='phone'>
                   <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "32px" }} />+91-930-741-7035</h4>
                    </div>
                    <div className='email'>
                   <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "32px" }} />kirtesh.reflection@gmail.com</h4>
                    </div>
                </div>
                <div className='right-div'>
                <h4>About Me</h4>
                <p>I am frontend developer</p>
                <div className='social'>
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "16px" }} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer