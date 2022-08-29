import './header.scss'

const Header = () => {
    const pagechange = (a) => {
        alert(a);
      }
    return(
<>
<div className="head">
    <div className ='logo'>LoGo</div>
    <div><button onClick={() => pagechange("This Page could not redirect")} className='signup_button'>SIGN UP</button></div>
</div>

</>
    )
} 
export default Header;