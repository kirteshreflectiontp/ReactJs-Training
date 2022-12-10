import React, { useEffect, useState }  from 'react'
import {updateProfile} from '../actions/index'
import {connect} from 'react-redux';
import {addProfile} from '../actions/index'
import { Link } from 'react-router-dom';
const Homepage = (props) => {
  console.log(props)
  const [userList,setUserList]= useState();
 
  useEffect(()=>{
    setUserList(props.user);
    props.updateProfile();
  },[])

  return (
  <div className='homepage'>
      <h1>HOMEPAGE</h1>
      <h2>Profile Data</h2>
      <div>
     {userList?.map((client)=>( 
      sessionStorage.username == client.username &&
        <div className='profile'>
          <div className='Profile-li'>Name: {client.fullname}</div>
          <div className='Profile-li'>Username:  {client.username}</div>
          <div className='Profile-li'>Mobile Number:  {client.mobilenumber}</div>
          <div className='Profile-li'>Address:  {client.address}</div>
          <div className='Profile-li'>Password:  {client.password}</div>
          <div className='btn'><button> <Link to="/" className='button-link' >Log Out</Link></button></div> 
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
    
    export default connect(mapStateToProps,mapDispatchToProps)(Homepage);