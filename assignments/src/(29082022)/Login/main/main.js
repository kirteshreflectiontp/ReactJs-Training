import './main.scss'
import Inputprops from './inputprops';
import {useState} from 'react';
const Header = () => {
    const[page,setPage] = useState('LOGIN');
    const pagechange = () => {
      page === 'LOGIN'? setPage('REGISTER'):setPage('LOGIN')
    }
    return(
<>
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
            <div className='input-data'>
                <button className='login_button' onClick={(event)=> pagechange(event)}>{page === 'LOGIN'?'SIGN UP':'LOGIN'} </button>
            </div>
</div>

</>
    )
} 
export default Header;