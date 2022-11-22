import './Aboutcontent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../Images/projectcard.webp'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left_abt'>
<h1>Who Am I ?</h1>
<p>Im a react frontend developer</p>
<Link to="/contactus">
    <button className='btn'>Conatct Me</button>
</Link>
        </div>
        <div className='right_abt'>
            <div className='img-container'>
            <div className='img-stack a-top'>
                <img src={React1} className="img" alt='img'/>
                </div>
            
            <div className='img-stack a-bottom'>
                <img src={React1} className="img" alt='img'/>
                </div>
            </div>
            </div>
        </div>

  
  )
}

export default Aboutcontent