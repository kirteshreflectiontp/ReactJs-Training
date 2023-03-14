import './Footer.css'
import React from 'react'
import { FaHome,FaPhone,FaMailBulk,FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <div className='left-div'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "32px" }} />
                     <div>
                        <p>Tupe complex,wing 4,flat No.8,Gopalpatti Manjri road pune-412307</p>
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
                <p>
                 I am a ReactJs developer trainee, A coding enthusiast passionate about learning Web development.
                 Seeking leverage development and management skills with focus on  collaboration ,communication ,passion and creativity.
                </p>
                <div className='social'>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrkFrSLsWCHKjjlsKLjWlLgpTlGcwvdpjLStSvGcvjHmXMZwKlGxjCbzvJvGKzzbTCPMT`} target="_blank" rel="noopener noreferrer'><FaMailBulk size={30} style={{ color: "#fff", marginRight: "16px" }} /></a>
                <a href='https://www.linkedin.com/in/kritesh-gaikwad-59b66120a'><FaLinkedin size={30} style={{ color: "#fff", marginRight: "16px" }} /></a>
                <a href='https://github.com/kirteshreflectiontp'><FaGithub size={30} style={{ color: "#fff", marginRight: "16px" }} /></a>
                <a href='https://www.instagram.com/_krittessh/'><FaInstagram size={30} style={{ color: "#fff", marginRight: "16px" }} /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer