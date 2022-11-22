import './Mainfront.css'
import React from 'react'
import MaskImg from "../Images/mainfrontImage.jpg"
import {Link} from 'react-router-dom';
const Mainfront = () => {
  return (
    <div className='main-front'>
<div className='main-front-mask'>
<img className='mask-img' src={MaskImg} alt='img'/>
</div>
<div className='content'>
<p>HI,I'M KIRTESH GAIKWAD</p>
<h1>React Developer</h1>
<div>
    <Link to="/project" className='btn'>Projects</Link>
    <Link to="/contactus" className='btn btn-light'>Contact</Link>
</div>
</div>
    </div>
  )
}

export default Mainfront