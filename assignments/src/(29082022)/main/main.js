import './main.scss'
import Inputprops from './inputprops';
const Header = () => {
    const pagechange = (a) => {
        alert(a);
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
            <div className='forgot'><span onClick={() => pagechange("This Page could not redirect")}>Forgot Password?</span> </div>
            <br/>
            <br/>
            <br/>
            <div className='input-data'>
                <button  onClick={() => pagechange("This Page could not redirect")} className='login_button'>LOG IN</button>
            </div>
</div>

</>
    )
} 
export default Header;