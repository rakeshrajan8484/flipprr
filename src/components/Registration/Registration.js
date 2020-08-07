import React, { Component } from 'react';

class Registration extends Component {
    state = {}
    render() {
        return (

            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="NameOfEntity" placeholder='Name of Entity' required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="Supervisor" placeholder='Supervisor' required />
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" id="RegisteredAddress" rows="3" placeholder='Full Registered Address' required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="AuthorizerEmail" placeholder='Transaction Authorizer Email' required />
                    <small id="emailHelp" className="form-text text-muted">This email will be used to send the One Time Authorization code for any financial transaction</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="ContactMobile" placeholder='Contact Mobile' required />
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">i authorize flipprr Inc to contact me for the registration process</label>
                </div>
                <div className="form-group text-center mt-5">
                    <button onClick={() => this.props.setCondition("Congratulations")} className='btn btn-outline-primary'>submit</button>
                </div>
            </form>

        );
    }
}

export default Registration;