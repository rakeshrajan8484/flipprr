import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BranchTransaction extends Component {
    state = {}
    render() {
        return (
            <div id='branchTransaction' className='container'>
                <form>
                    <div className="form-group">
                        <select className="custom-select">
                            <option selected>select branch</option>
                            <option value="1">one</option>
                            <option value="2">two</option>
                            <option value="3">three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="branchBalance" placeholder='Current branch balance' required />
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-2 '>
                            <p>filter by date range</p>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                <input type="date" className="form-control" id="fromDate" required />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                <input type="date" className="form-control" id="toDate" required />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group text-center mt-5">
                                <Link to='/dashboard' className='btn btn-outline-primary'>Submit</Link>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group text-center mt-5">
                                <Link to='/dashboard' className='btn btn-outline-primary'>Export all branch transition</Link>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="table-responsive my-5">
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th scope="col" data-order='desc' data-field="date" data-sortable="true" >date time</th>
                                <th scope="col" data-order='desc' data-field="name" data-sortable="true">transaction details</th>
                                <th scope="col">wallet amount</th>
                                <th scope="col">wallet money in/out</th>
                                <th scope="col">cash amount</th>
                                <th scope="col">cash money in/out</th>
                                <th scope="col">transaction profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{Date()}</th>
                                <td>recharge from ho</td>
                                <td>4000</td>
                                <td>in</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>40000</td>

                            </tr>
                            <tr>
                                <th>{Date()}</th>
                                <td>recharge from krishna</td>
                                <td>4000</td>
                                <td>in</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>40000</td>
                            </tr>
                            <tr>
                                <th>{Date()}</th>
                                <td>recharge from ho</td>
                                <td>4000</td>
                                <td>in</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>40000</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BranchTransaction;