import Homepage from "./components/Homepage";
import Registration from "./components/Registration";
import {updateProfile} from './actions'
import {connect} from 'react-redux';
import {addProfile} from './actions'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from "./components/Login";
function App() {
  return (
    <div>
     < BrowserRouter>
      <Routes>
        <Route index path="/" element = {<Login />}/>
        <Route path="/Registration" element = {<Registration />}/>
        <Route path="/homepage" element = {<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state =>({
  ...state
  })
  const mapDispatchToProps = dispatch =>({
    updateProfile:(user)=> dispatch(updateProfile(user)),
    addProfile:(user)=> dispatch(addProfile(user))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);