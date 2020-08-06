import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const $ = window.$
class BranchMaintenance extends Component {
    state = {}
    UNSAFE_componentWillMount() {
        $(document).on('show.bs.modal', '.modal', function () {
            $(this).appendTo('body');
        });
    }
    render() {
        return (
            <div id='branchMaintenance' className='container'>
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
                    <div className="form-group">
                        <select className="custom-select">
                            <option selected>branch status</option>
                            <option value="1">active</option>
                            <option value="2">cosed</option>
                            <option value="3">on-hold</option>
                        </select>
                    </div>
                    <div className="form-group text-center mt-5">
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#status">Submit Request</button>
                    </div>
                   
                </form>
                <div class="modal fade" id="status" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ThankYou! The branch status is updated in the system
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BranchMaintenance;