import React, { useState } from 'react'
import {Link} from 'react-router-dom';
const Signup = () => {
  const [email,setEmail] = useState('');
  const [fullname,setFullName] = useState('');
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [mobilenumber,setMobileNumber] = useState('');
  const [address,setAddress] = useState('');
  const [errormessage,setErrorMessage] = useState('');
  const validateUser = () => {
    let valid = false;
    if(  email !==''&& fullname !==''&& username !== ''&&  password !==''  && mobilenumber !=='' && address !==''){
      valid = true;
    }
    return valid;
  }
  const RegisterUser = () => {
    if(validateUser()){
      const users = {
        email: email,
        fullname: fullname,
        username: username,
        password: password,
        mobilenumber: mobilenumber,
        address: address
      }
      let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
      userList.push(JSON.stringify(users));
      localStorage.setItem('userList',JSON.stringify(userList));
      console.log('userList', userList);
      setErrorMessage('')
      window.location.href = './'
    }
    else{
      setErrorMessage('Please Fill All Data Inputs')
    }
  }
  return (
    <div>
 <div className='body_b'>
                <div className="head">
                    <div className='logo'>LoGo</div>
                    <div><button className='signup_button'><Link to= './Login'>LOGIN</Link></button></div>
                </div>
              
                   
                    <div>
                        <div className="main">
                            <div className='login_head'>Sign Up</div>
                            <div>Welcome !Please enter your details.</div>
                            <div className='error_message'>{errormessage}</div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <div className='input-data'>
                                <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email Address" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setFullName(event.target.value)} type="text" placeholder="Full Name" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setUserName(event.target.value)} type="text" placeholder="User Name" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setMobileNumber(event.target.value)} type="number" placeholder="Enter  Mobile Number" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setAddress(event.target.value)} type="textr" placeholder="Enter your address" />
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className='input-data'>
                            <button className='login_button' onClick={RegisterUser}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                

                <div className="foot">
                    <div>All copyright &copy; reserved Library of Life</div>
                    <div><span className='termscondition'>Terms & Conditions</span><span>Privacy Policy</span> </div>
                </div>
            </div>

    </div>
  )
}

export default Signup