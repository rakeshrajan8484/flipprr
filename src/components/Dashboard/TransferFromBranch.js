import React, {useState} from 'react';



const TransferFromBranch = () => {
    const [authorize, setAuthorize] = useState(false)
    const authorization = () => {
        setAuthorize(true)
    }
    return (
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
                    <button type="button" class="btn btn-outline-primary" onClick={authorization}>authorize</button>
                </div>
                {authorize ? <div><div className="form-inline form-group d-flex justify-content-center my-5">
                    <label>authorization code</label>
                    <input type="text" className="form-control mx-3" id="branchPhone" placeholder='xxxx' />
                </div>
                    <div className="form-group text-center mt-5">
                        <button type="button" class="btn btn-outline-primary">submit</button>
                    </div></div> : ''}
                
            </form>
        </div>
    );
}

export default TransferFromBranch;