import {updateProduct} from './actions'
import './ReduxApp1.css';
import {products} from './Components/Products'
import { useEffect } from 'react';
import Homepage from './Components/Homepage';
import Productlist from './Components/Productlist';
import Productpage from './Components/Productpage'
import Addproduct from'./Components/Addproduct';
import Registration from './Components/Registration'
import {updateProfile} from './actions'
import {connect} from 'react-redux';
import {addProfile} from './actions'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App(props) {
 
  useEffect(()=>{
    props.updateProduct(products)
  },[props])
  return (
    <div>
     < BrowserRouter>
      <Routes>
      <Route index path="/" element = {<Login />}/>
        <Route path="/Registration" element = {<Registration />}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="homepage" element = {<Homepage/>}/>
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
  updateProduct:(data)=> dispatch(updateProduct(data)),
  updateProfile:(user)=> dispatch(updateProfile(user)),
  addProfile:(user)=> dispatch(addProfile(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);




