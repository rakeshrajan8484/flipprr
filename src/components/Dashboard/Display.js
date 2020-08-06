import React from 'react';

const Display = () => {
    return (
        <div id='display'>
            <h4 className='py-3 text-center'>Recent transaction</h4>
            <div className='cards'>
                <div className='card'>
                    <h1>Branch One</h1>
                    <p>Transaction amount : $500</p>
                </div>
                <div className='card'>
                    <h1>Branch Two</h1>
                    <p>Transaction amount : $500</p>
                </div>
                <div className='card'>
                    <h1>Branch Three</h1>
                    <p>Transaction amount : $500</p>
                </div>
            </div>
            <div >
                <h4 className='text-center my-5'>check your branch status</h4>
                <div className='container table-responsive bg-light'>
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

                            </tr>
                            <tr>
                                <td>nj454565</td>
                                <td>new york branch</td>
                                <td>rakesh</td>
                                <td>closed</td>

                            </tr>
                            <tr>
                                <td>nj2136587</td>
                                <td>new jersey branch</td>
                                <td>barani</td>
                                <td>on-hold</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Display;