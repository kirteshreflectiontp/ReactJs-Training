import './header.scss'
import {useState} from 'react';
const Header = () => {
  const[page,setPage] = useState('LOGIN');
  const pagechange = () => {
    page === 'LOGIN'? setPage('REGISTER'):setPage('LOGIN')
  }
  
    
    return(
<>
<div className="head">
    <div className ='logo'>LoGo</div>
    <div><button className='signup_button' onClick={(event)=> pagechange(event)}>{page === 'LOGIN'?'SIGN UP':'LOGIN'}</button></div>
</div>

</>
    )
} 
export default Header;