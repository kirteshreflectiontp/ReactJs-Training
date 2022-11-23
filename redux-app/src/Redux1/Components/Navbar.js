import React from 'react'
import{Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
         <div>
      <nav>
      <ul >
            <li>
                <Link to="/" className='link'>Homepage</Link>
            </li>
            <li>
                <Link to="/productlist" className='link'>Product-list</Link>
            </li>
            <li>
                <Link to="/productpage" className='link'>Product-Page</Link>
            </li>
            <li>
                <Link to="/addproduct" className='link'>Add-Product</Link>
            </li>
        </ul>
      </nav>
  </div>
    </div>
  )
}

export default Navbar