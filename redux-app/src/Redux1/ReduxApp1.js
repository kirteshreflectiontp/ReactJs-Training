import {updateProduct} from './actions'
import './ReduxApp1.css';
import {connect} from 'react-redux';
import {products} from './Components/Products'
import { useEffect } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Productlist from './Components/Productlist';
import Productpage from './Components/Productpage'
import Addproduct from'./Components/Addproduct';

function App(props) {
 
  useEffect(()=>{
    props.updateProduct(products)
  },[props])
  return (
    <div>
     < BrowserRouter>
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/productlist" element = {<Productlist/>}/>
        <Route path="/productpage" element = {<Productpage/>}/>
        <Route path="/addproduct" element = {<Addproduct/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state =>({
...state
})
const mapDispatchToProps = dispatch =>({
  updateProduct:(data)=> dispatch(updateProduct(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);




