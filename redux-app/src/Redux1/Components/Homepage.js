import React from 'react'
import {connect} from 'react-redux';
import Navbar from './Navbar';
const Homepage = (props) => {
  return (
    <div className='Homebody'>
      <h1>Homepage</h1>
 <Navbar/>
 <div className='Home'>
  <div className='main_logo'>ShopKaro.com</div>
        {props?.products?.arrayOfProducts?.map((products,index) => (
           (index < 2) &&
           <div className='products'key={products.id}>
<div className='Product-img'>
<img  src={products.imgUrl} width="250px" height="250px" alt="img"/>
</div>
<div className='Product-title'>
{products.name}
<div className='Product-price'>
{products.price}
</div>
</div>

           </div>
        ))}
        </div>
    </div>
  )
}

const mapStateToProps = state =>({
    ...state
    })
export default connect(mapStateToProps)(Homepage);