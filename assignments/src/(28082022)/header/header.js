import './header.css'

import img from './flipcartlogo.jpg'
const Header = () => {

    return (
<>
    <div>
        <header className='header'>
       <span className='li'><img className='logoimg'src={img}/></span> 
         <span ><input className='input_search' type='text' placeholder='Search for products,brands and more' /></span>
         <span className='li'>Login</span>
         <span className='li'>Become a Seller</span>
         <span className='li'>More </span>
         <span className='li'>Cart</span>
        </header>
        
    </div>     
</>
    )
}
export default Header;

