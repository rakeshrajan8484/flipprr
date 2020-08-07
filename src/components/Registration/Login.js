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
    const [redirect, setredirect] = useState(false)
    const [responseToPost, setresponseToPost] = useState()
    const loginCall = async e => {
        e.preventDefault()
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET',
        }).then(() => {
            $("#loginModal").modal("hide"); 
            setredirect(true)
        })
        // const body = await response.json();
        // console.log(body);
        
    };
    // if (redirect) {
    //     return <Redirect strict from="/"  to='/dashboard' />;
    // }
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
                    <button className='btn btn-outline-primary' onClick={() => props.loginCall(username, password)} >submit</button>
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