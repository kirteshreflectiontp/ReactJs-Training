import './Reducer.css';
import {useEffect,useReducer} from 'react';
import {initialUsers} from './InitialUsers';
import { Reducer } from './Reducer';

function ReducerApp(){
    const[users,dispatch]= useReducer(Reducer,initialUsers)
const Login = () => {
    dispatch({type:'Login',username:'Krittesh'})
}
const Register = () => {
    dispatch({type:'Register',username:'Krittesh'})
}
useEffect(() => {
    console.log('User Updated',users)
},[users])
return(
<>
<div className='main'>
    <button onClick={Login}>LOGIN</button>
    <button onClick={Register}>REGISTER</button>
</div>
</>
)
}
export default ReducerApp;