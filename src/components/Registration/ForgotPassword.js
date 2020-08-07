import React from 'react';

const ForgotPassword = (props) => {


    return (

        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="UserName" required />
                <label>User Name</label>
            </div>


            <div className="form-group text-center mt-5">
                <button onClick={() => props.setCondition("ResetPassword")} className='btn btn-outline-primary'>request password reset</button>
            </div>

        </form>

    );
}

export default ForgotPassword;