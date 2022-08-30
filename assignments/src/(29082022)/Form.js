import Register from './Register/Register';
import Login from './Login/Login';
import{useState} from 'react';


function Form() {
  const[page,setPage]=useState('Login');
  const pagechange = (event)=>{
    page === 'Login'? setPage('Register'):setPage('Login')
  }
  
    return (
      <>
      <button onClick={(event)=> pagechange(event)}>{page === 'Login'?'Register':'Login'}</button>
      {page === 'Login'?
       <Login/>
       :
       <Register/>
    
    }
     
      </>
    );
  }
  
  export default Form;