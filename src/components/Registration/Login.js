import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
const $ = window.$
const Login = (props) => {
    console.log('====================================');
    console.log(props.loginCall);
    console.log('====================================');
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div id='login'>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="UserName"  value={username} onChange={(e) => { setUserName(e.target.value) }} required/>
                    <label>user name</label>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="Password"  value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                    <label>password</label>
                </div>

                <div className="form-group text-center mt-5">
                    <button type='button' className='btn btn-outline-primary' onClick={() => props.loginCall(username, password)} >submit</button>
                    {/* <Link to='/dashboard' className='btn btn-outline-primary' >submit</Link> */}
                </div>
                <div className="form-group text-center m-2">
                    <button onClick={() => props.setCondition("Registration")} className='btn btn-link text-dark'>create an account</button>
                </div>
                <div className="form-group text-center">
                    <button onClick={() => props.setCondition("forgotPassword")} className='btn btn-link text-dark'>forgot password?</button>
                </div>
            </form>
        </div>
    );
}


export default Login;