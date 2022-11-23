import React from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux';
const Productlist = (props) => {
  return (
    <div>
      <h1>Product List</h1>
      <Navbar/>
      <div className='main_logo'>ShopKaro.com</div>
      {props?.products?.arrayOfProducts?.map((products) => (
           <div className='products'>
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
  )
}

const mapStateToProps = state =>({
  ...state
  })
export default connect(mapStateToProps)(Productlist);