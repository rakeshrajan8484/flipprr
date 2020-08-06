import React, { Component } from 'react';

class ResetPassword extends Component {

    AuthorizationCode = (e) => {
        e.preventDefault();
        this.setState({ AuthorizationCode: "123" })
    }
    state = { AuthorizationCode: '' }
    render() {
        return (

            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="UserName" placeholder='User Name' required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="AuthorizationCode" placeholder='Authorization Code' required />
                </div>

                <div className="form-group text-center mt-5">
                    <button to='/Congratulations' className='btn btn-outline-primary' onClick={this.AuthorizationCode}>reset password</button>
                </div>
                {this.state.AuthorizationCode !== "" ? <div id='changePassword' className='my-5' >
                    <div className="form-group">
                        <input type="password" className="form-control" id="NewPassword" placeholder='Enter New Password' required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="ConfirmPassword" placeholder='Reenter New Password' required />
                    </div>
                    <div className="form-group text-center mt-5">
                        <button onClick={() => this.props.setCondition("ThankYou")} className='btn btn-outline-primary'>submit</button>
                    </div>
                </div> : ''}

                <div className="form-group text-center mt-5">
                    <button onClick={() => this.props.setCondition("Login")} className='btn btn-link text-dark'>back to login</button>
                </div>
            </form>

        );
    }
}

export default ResetPassword;