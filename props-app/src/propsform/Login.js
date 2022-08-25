import Inputprops from './inputprops';

const Login = () => {
    return (
        <div className='login-form'>
            <h1>LOGIN FORM</h1>
            <div className='input-data'>
                <label>User Name :</label>
                <Inputprops type="text" placeholder="Enter User Name"/>
            </div>
            <div className='input-data'>
                <label>Password :</label>
                <Inputprops  type="password" placeholder="Enter User password"/>
            </div>
            <div className='input-data'>
                <button>LOG IN</button>
            </div>
        </div>
    )
}
export default Login;