import React from 'react'
import { Link } from 'react-router-dom';


import Registerform from './Registerform';
const Signup = (props) => {
 props.setInitialPage('signup')
  return (
    <div>
       <div className='body_b'>
       <div className="head">
                    <div className='logo'>LoGo</div>
                    <div><button className='signup_button'><Link to= '/'>LOGIN</Link></button></div>
                </div>
 <Registerform />
 </div>

    </div>
  )
}

export default Signup