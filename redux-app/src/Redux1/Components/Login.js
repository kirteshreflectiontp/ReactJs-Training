import { Link } from 'react-router-dom';
import '../ReduxApp1.css';
import { useEffect, useState } from 'react';
import {updateProfile} from '../actions/index'
import {connect} from 'react-redux';
import {addProfile} from '../actions/index'
const Login = (props) => {
  console.log(props)
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
   const [errorMessage,setErrorMessage] = useState('');
 const [userList,setUserList]= useState();
 useEffect(()=>{
  props.updateProfile();
  console.log(props.user)
 },[])
      const login = () => {
        setUserList(props.user);
      if(username !== '' && password !==''){
        userList?.map((currentUser) => {
        if(currentUser.username === username && currentUser.password === password){
          setErrorMessage('');
         sessionStorage.username = username;
         sessionStorage.password = password
         window.location.href = './homepage'
        }
        else{
          setErrorMessage('Enter Correct Credentials');
        }
            })
      }
      }
  return (
    <>
    <div className='main-page'>
         <h2 className='heading-signup'>LOGIN ACCOUNT</h2>
       <div className='error_message'>{errorMessage}</div>
         <div><button  className='btn'> <Link to="/Registration" className='button-link' >SIGN UP</Link></button></div> 
       <div><label className='login_label'>USERNAME</label></div>
        <div> <input className='login_input' type='text'placeholder='Enter Username'  onChange={(e)=>setUsername(e.target.value)} value={username}/></div> 
        <div><label className='login_label'>PASSWORD</label></div>
        <div> <input  className='login_input'type='text'placeholder='Create Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/></div> 
        <div><button  className='btn' onClick={login}> SIGN IN</button></div> 
       
    </div>
    </>
  )
}


    
const mapStateToProps = state =>({
  ...state
  })
  const mapDispatchToProps = dispatch =>({
    updateProfile:(user)=> dispatch(updateProfile(user)),
    addProfile:(user)=> dispatch(addProfile(user))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);