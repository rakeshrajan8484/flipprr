import React from 'react';

function ThankYou(props) {
    return (
         
        <h5 className='text-center'>Thank You! Your password has been reset. <br />Please <button onClick={() => props.setCondition("Login")} className='btn btn-link text-dark'>login</button> again</h5>
        
    )
}

export default ThankYou