import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class AddBranch extends Component {
    state = {}
    render() {
        return (
            <div id='addBranch' className='container'>
                <h4 className='py-3'>Please enter branch details</h4>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchName" placeholder='Branch Name' required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchCode" placeholder='Branch Code' required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchSupervisor" placeholder='Branch Supervisor' required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchCurrency" placeholder='Branch Currency' required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchPhone" placeholder='Branch Phone' required />
                    </div>
                    <div className="form-group">
                        <textarea rows="3" type="text" className="form-control" id="branchAddress" placeholder='Branch Address' required />
                    </div>
                    <div className="form-group">
                        <select className="custom-select">
                            <option selected>parent branch</option>
                            <option value="1">one</option>
                            <option value="2">two</option>
                            <option value="3">three</option>
                        </select>
                    </div>
                    <div className="form-group text-center mt-5">
                        <Link to='/dashboard' className='btn btn-outline-primary'>Submit Request</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBranch;