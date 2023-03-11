import React, { useEffect, useState }  from 'react'
import {updateProfile} from '../actions/index'
import {connect} from 'react-redux';
import {addProfile} from '../actions/index'
import Navbar from './Navbar';
const Profile = (props) => {
  console.log(props)
  const [userList,setUserList]= useState();

  useEffect(()=>{
    props.updateProfile();
    setUserList(props.user);
    console.log(props.user)
  },[props])

  return (
  <div className='profilepage'>
      <h1>Profile Page</h1>
      <Navbar/>
      <div className='main_logo'>ShopKaro.com</div>
      <div>
      {userList?.map((client)=>( 
      sessionStorage.username === client.username &&
        <div className='profile'key={client.id}>
           <h2>Profile Data</h2>
          <div className='Profile-li'>Name: {client.fullname}</div>
          <div className='Profile-li'>Username:  {client.username}</div>
          <div className='Profile-li'>Mobile Number:  {client.mobilenumber}</div>
          <div className='Profile-li'>Address:  {client.address}</div>
          <div className='Profile-li'>Password:  {client.password}</div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

const mapStateToProps = state =>({
    ...state
    })
    const mapDispatchToProps = dispatch =>({
      updateProfile:(user)=> dispatch(updateProfile(user)),
      addProfile:(user)=> dispatch(addProfile(user))
    })
    
    export default connect(mapStateToProps,mapDispatchToProps)(Profile);