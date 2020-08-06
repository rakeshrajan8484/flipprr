import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = (props) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [responseToPost, setresponseToPost] = useState()
    const loginCall = async e => {
        // e.preventDefault()

        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, password }),
        // })
        // const body = await response.json();
        // console.log(body.data);
        props.props.history.push('/dashboard')
    };
    return (
        <div id='login'>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="UserName" placeholder='User Name' value={username} onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="Password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="form-group text-center mt-5">
                    <button className='btn btn-outline-primary'  onClick={() => { props.props.history.push('/dashboard'); }} >submit</button>
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