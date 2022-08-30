import './header.scss'
import {useState} from 'react';
const Header = () => {
    const[page,setPage] = useState('Login');
  const pagechange = () => {
    page === 'Login'? setPage('Register'):setPage('Login')
  }
    
    return(
<>
<div className="head">
    <div className ='logo'>LoGo</div>
    <div><button onClick={pagechange} className='signup_button'>SIGN UP</button></div>
</div>

</>
    )
} 
export default Header;