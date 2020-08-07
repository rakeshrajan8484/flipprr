import React, { Component } from 'react';

class Registration extends Component {
    state = {}
    render() {
        return (

            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="NameOfEntity" required />
                    <label>Name of Entity</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="Supervisor" required />
                    <label>Supervisor</label>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" id="RegisteredAddress" rows="2" required />
                    <label>Full Registered Address</label>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="AuthorizerEmail" required />
                    <label>Transaction Authorizer Email</label>
                    
                </div>
                <small id="emailHelp" className="form-text text-muted">This email will be used to send the One Time Authorization code for any financial transaction</small>
                <div className="form-group">
                    <input type="text" className="form-control" id="ContactMobile" required />
                    <label>Contact Mobile</label>
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