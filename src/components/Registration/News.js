import React from 'react';
import cardbg from '../../images/digitalmoney.jpg'
import card2 from '../../images/card2.jpg'
function News() {
    return (
        <div id='news' className='welcomeContent'>
            <h4 className='text-center my-5 line'>See what’s happening right now</h4>
            <div className='newsGroup'>
                <div className="card" >
                    <img src={cardbg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={card2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card" >
                    <img src={cardbg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default News