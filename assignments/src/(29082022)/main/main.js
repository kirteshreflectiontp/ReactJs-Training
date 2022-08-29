import './main.scss'
import Inputprops from './inputprops';
const Header = () => {
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
                <button className='login_button'>LOG IN</button>
            </div>
</div>

</>
    )
} 
export default Header;