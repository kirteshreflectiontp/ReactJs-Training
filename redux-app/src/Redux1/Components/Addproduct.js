import React, { useState } from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux';
import {addproduct} from '../actions/index'
import './Addproduct.css'
const Addproduct = (props) => {
  console.log('props',props)
  const[productUrl,setProductUrl]= useState();
  const[productName,setProductName]= useState();
  const[productPrice,setProductPrice]= useState();
const addNewProduct = ()=>{
  alert(358)
  const product = {
    imgUrl: productUrl,
    name: productName,
    price: productPrice
  }
  let allProducts = props.products.arrayOfProducts;
  allProducts.push(product);
  props.addProduct(allProducts);
}
  return (
    <div>
      <h1>Add Product</h1>
      <Navbar/>
      <div className='main_logo'>ShopKaro.com</div>
      <div className='form'>
        <form>
            <label>Image URL</label>
            <input type="text" onChange={(event)=>setProductUrl(event.target.value)} placeholder='Enter Image URL'></input>
            <label>Product Name</label>
            <input type="text" onChange={(event)=>setProductName(event.target.value)} placeholder='Enter Product Name'></input>
            <label>Product Price</label>
            <input type="text" onChange={(event)=>setProductPrice(event.target.value)} placeholder='Enter Price'></input>
            <button onClick={addNewProduct} className='btn'>Submit</button>
        </form>

    </div>
      </div>
  )
}

const mapStateToProps = state =>({
  ...state
  })
 const mapDispatchToProps = dispatch =>({
    addproduct:(products)=> dispatch(addproduct(products))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Addproduct);