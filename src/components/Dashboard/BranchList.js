import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BranchList extends Component {
    state = {}
    render() {
        return (
            <div id='branchTransaction' className='container table-responsive'>

                <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">branch code</th>
                            <th scope="col">branch name</th>
                            <th scope="col">supervisor</th>
                            <th scope="col">branch status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>nj456775</td>
                            <td>new jersey branch</td>
                            <td>krishna</td>
                            <td>active</td>
                            <td><Link to='/branchMaintenance'>change status</Link></td>
                        </tr>
                        <tr>
                            <td>nj454565</td>
                            <td>new york branch</td>
                            <td>rakesh</td>
                            <td>closed</td>
                            <td><Link to='/branchMaintenance'>change status</Link></td>
                        </tr>
                        <tr>
                            <td>nj2136587</td>
                            <td>new jersey branch</td>
                            <td>barani</td>
                            <td>on-hold</td>
                            <td><Link to='/branchMaintenance'>change status</Link></td>

                        </tr>
                    </tbody>
                </table>
                <form>
                    <div className="form-inline form-group d-flex justify-content-center my-5">
                        <label>total amount being transfered</label>
                        <input type="text" className="form-control mx-3" id="branchPhone" value='3000' disabled />
                    </div>
                </form>
            </div>

        );
    }
}

export default BranchList;