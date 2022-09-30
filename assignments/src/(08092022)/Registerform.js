import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

const Registerform = (props) => {
    const{loggedInUser} = useContext(UserContext);
    const [email,setEmail] = useState(props.page === 'edit' ? loggedInUser?.email : '');
    const [fullname,setFullName] = useState(props.page === 'edit' ? loggedInUser?.fullname :'');
    const [username,setUserName] = useState(props.page === 'edit' ? loggedInUser?.username :'');
    const [password,setPassword] = useState(props.page === 'edit' ? loggedInUser?.password :'');
    const [mobilenumber,setMobileNumber] = useState(props.page === 'edit' ? loggedInUser?.mobilenumber :'');
    const [address,setAddress] = useState(props.page === 'edit' ? loggedInUser?.address :'');
    const [errormessage,setErrorMessage] = useState();
    const validateUser = () => {
      let valid = false;
      if(  email !==''&& fullname !==''&& username !== ''&&  password !==''  && mobilenumber !=='' && address !==''){
        valid = true;
      }
      return valid;
    }
    const Register = (userList,users) => {
        userList.push(JSON.stringify(users));
        localStorage.setItem('userList',JSON.stringify(userList));
        console.log('userList', userList);
        setErrorMessage('')
        window.location.href = '/';
    }
    const UpdateProfile = (userList,users) => {
        const filteredUserList = userList.filter((user) => {
            const userObject = JSON.parse(user);
            if(userObject.username !== loggedInUser.username){
                return user;
            }
        })
        filteredUserList.push(JSON.stringify(users));
        localStorage.setItem('userList',JSON.stringify(filteredUserList));
        setErrorMessage('')
        window.location.href = './Home';
    }
    const SaveProfile = () => {
        if(validateUser()){
          const users = {
            email: email,
            fullname: fullname,
            username: username,
            password:props.page === 'edit' ? loggedInUser.password : password,
            mobilenumber: mobilenumber,
            address: address
          }
          console.log('users',users);
          let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
        if(props.page === 'edit'){
            UpdateProfile(userList,users)
        }
        else{
            Register(userList,users)
        }
        }
        else{
          setErrorMessage('Please Fill All Data Inputs')
        }
      }
  return (
    <div>
 {props.page !== 'edit' ?
         <div className="main">
                            <div className='login_head'>Sign Up</div>
                            <div>Wellcome! Please Enter Your Details</div>
                            <div className='error_message'>{errormessage}</div>
                        </div>
                        :
                        <div className="main">
                        <div className='login_head'>Edit Information</div>
                    </div>
}
         <div>
         <br />
                        <br />
                        <br />
                            <div className='input-data'>
                                <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email Address" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setFullName(event.target.value)} type="text" placeholder="Full Name" />
                            </div>
                            <div className='input-data'>
                                <input onChange={(event) => setUserName(event.target.value)} type="text" placeholder="User Name" />
                            </div>
                            {props.page === 'edit' ? <></> :
                            <div className='input-data'>
                                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                            </div>
                            }
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
                            <button className='login_button' onClick={SaveProfile}>{props.page === 'edit' ? <>Save</> : <>Sign Up</>}</button>
                            </div>
             </div>
                    
    </div>
  )
}

export default Registerform