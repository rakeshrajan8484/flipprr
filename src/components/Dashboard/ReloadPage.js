import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ReloadPage extends Component {
    state = {}
    render() {
        return (
            <div class="accordion container" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Reload a single branch
        </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
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
                                    <input type="text" className="form-control" id="branchBalance" placeholder='Branch balance' required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="transferAmount" placeholder='transfer amount' required />
                                </div>
                                <div className="form-group mt-5">
                                    <button type="button" class="btn btn-outline-primary">complete transaction</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                bulk reload branches
        </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">View list of branches</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">upload excel</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div id='branchTransaction' className='container table-responsive'>
                                        <table className="table table-hover" >
                                            <thead>
                                                <tr>
                                                    <th scope="col">branch code</th>
                                                    <th scope="col">current balance</th>
                                                    <th scope="col">supervisor</th>
                                                    <th scope="col">transfer amount</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>nj456775</td>
                                                    <td>usd-400</td>
                                                    <td>krishna</td>
                                                    <td>1000</td>

                                                </tr>
                                                <tr>
                                                    <td>nj454565</td>
                                                    <td>usd-200</td>
                                                    <td>rakesh</td>
                                                    <td>1000</td>

                                                </tr>
                                                <tr>
                                                    <td>nj2136587</td>
                                                    <td>usd-100</td>
                                                    <td>barani</td>
                                                    <td>1000</td>


                                                </tr>
                                            </tbody>
                                        </table>
                                        <form>
                                            <div className="form-inline form-group d-flex justify-content-center my-5">
                                                <label>total amount being transfered</label>
                                                <input type="text" className="form-control mx-3" id="branchPhone" value='3000' disabled />
                                            </div>
                                            <div className="form-group text-center mt-5">
                                                <button type="button" class="btn btn-outline-primary">continue</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <form>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">browse excel</label>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ReloadPage;