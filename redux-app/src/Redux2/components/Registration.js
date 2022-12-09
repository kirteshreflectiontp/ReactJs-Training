import { Link } from 'react-router-dom';
import '../ReduxApp2.css';
import {updateProfile} from '../actions'
import {connect} from 'react-redux';
import {addProfile} from '../actions'
import { useEffect, useState } from 'react';

function Registration(props){
  
  const [fullname,setFullname] = useState('');
  const [username,setUsername] = useState('');
  const [mobilenumber,setMobilenumber] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');

  console.log(props)
  const updateuser ={
    fullname:fullname,
    username:username,
    mobilenumber:mobilenumber,
    address:address,
    password:password
  }
  const RegisterUser = ()=>{
    props.user?.push(updateuser);
    props.addProfile(props.user)
    console.log(props)
    window.location.href = '/'
  }
  useEffect(()=>{
    props.updateProfile();
  },[])
 
  return (
    <div className='main-page'>
      <h2 className='heading-signup'>CREATE ACCOUNT</h2>
      <div><button> <Link to="/" className='button-link' >LOG IN</Link></button></div> 
     <div> <input type='text'placeholder='Enter Your FullName' onChange={(e)=>setFullname(e.target.value)} value={fullname}/></div> 
     <div> <input type='text'placeholder='Enter Username'  onChange={(e)=>setUsername(e.target.value)} value={username}/></div> 
     <div> <input type='number'placeholder='Enter Your Mobile Number'  onChange={(e)=>setMobilenumber(e.target.value)} value={mobilenumber}/></div> 
     <div> <input type='text'placeholder='Enter Your Address'  onChange={(e)=>setAddress(e.target.value)} value={address}/></div> 
     <div> <input type='text'placeholder='Create Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/></div> 
     <div><button onClick={() => RegisterUser()}>SIGN UP</button></div> 
   
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

export default connect(mapStateToProps,mapDispatchToProps)(Registration);