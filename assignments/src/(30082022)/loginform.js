import Inputprops from './inputprops';
import './loginform.css';
import {useState} from 'react';
const Form = () => {
  const[page,setPage] = useState('LOGIN');
  const pagechange = () => {
    page === 'LOGIN'? setPage('SIGN UP'):setPage('LOGIN')
  }
    return(
<>
<div className='body_b'>
<div className="head">
    <div className ='logo'>LoGo</div>
    <div><button className='signup_button' onClick={(event)=> pagechange(event)}>{page === 'LOGIN'?'SIGN UP':'LOGIN'}</button></div>
</div>
<div className="main">
    <div className ='login_head'>Login</div>
    <div>Welcome back!Please enter your details.</div>
</div>
<br/>
<br/>
<br/>
<div>
<div className='input-data'>
                <Inputprops type="text" placeholder="Email Address"/>
            </div>
            <div className='input-data'>
                <Inputprops  type="password" placeholder="Password"/>
            </div>
            <div className='forgot'><span>Forgot Password?</span> </div>
            <br/>
            <br/>
            <br/>
            {page === 'LOGIN'?
            <div className='input-data'>
                <button className='login_button'>LOGIN</button>
            </div>
            :
            <div className='input-data'>
                <button className='login_button'>SIGN UP</button>
            </div>
            }
</div>
<div className="foot">
    <div>All copyright &copy; reserved Library of Life</div>
    <div><span className='termscondition'>Terms & Conditions</span><span>Privacy Policy</span> </div>
</div>





</div>
</>
    )
} 
export default Form;
