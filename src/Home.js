import React, { Component } from 'react';
import bg from './images/122.png'
import img139 from './images/139.png'
import img115 from './images/115.png'
import img2680 from './images/2680.png'
import img2682 from './images/2682.png'
import img453 from './images/453.png'
import img455 from './images/455.png'
import SplitText from 'react-pose-text';
// import News from './components/Registration/News'
import Footer from './components/Footer';
import ResetPassword from './components/Registration/ResetPassword'
import ForgotPassword from './components/Registration/ForgotPassword';
import Login from './components/Registration/Login';
import ThankYou from './components/Registration/ThankYou';
import Registration from './components/Registration/Registration';
import Congratulations from './components/Registration/Congratulations';
const $ = window.$
const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 120
    }
};
class Home extends Component {
    loginCall = async (username, password) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const body = await response.json();
        window.location = body.redirect
        
    };
    state = { condition: 'Login', redirect:false }
    UNSAFE_componentWillMount() {
        $(document).on('show.bs.modal', '.modal', function () {
            $(this).appendTo('body');
        });
    }
    setCondition = (e) => {
        this.setState({ condition: e })
    }
    
    render() {
        const renderContent = () => {
            if (this.state.condition === "Login") {
                return <Login setCondition={this.setCondition} props={this.props} loginCall={this.loginCall}/>;
            }
            else if (this.state.condition === "Registration") {
                return <Registration setCondition={this.setCondition} />;
            }
            else if (this.state.condition === "forgotPassword") {
                return <ForgotPassword setCondition={this.setCondition} />;
            }
            else if (this.state.condition === "ResetPassword") {
                return <ResetPassword setCondition={this.setCondition} />;
            }
            else if (this.state.condition === "ThankYou") {
                return <ThankYou setCondition={this.setCondition} />;
            }
            else if (this.state.condition === "Congratulations") {
                return <Congratulations setCondition={this.setCondition} />;
            }
            else {
                return <Login setCondition={this.setCondition} props={this.props} />;
            }
        }

        return (
            <React.Fragment>    
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {renderContent()}
                            </div>

                        </div>
                    </div>
                </div>
                <div id='parallax'>
                    <div className='d-flex justify-content-end p-5'>
                        <button type='button' className='btn btn-outline-light' data-toggle="modal" data-target="#loginModal">Partner Portal</button>
                    </div>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-6 text-center my-5'>
                            <h1>      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>flipprr</SplitText></h1>
                            <h2>money transfer! made simple!</h2>
                        </div>
                        <div className='col-md-6'>
                            <img src={bg} alt='parallaxImage' className='img-fluid' />
                        </div>

                    </div>
                    

                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 order-12' data-aos="fade-right">
                        <img src={img139} alt='parallaxImage' className='img-fluid' />
                    </div>

                    <div className='col-md-6 text-center my-5 order-1 order-md-12' data-aos="fade-left">
                        <h1 className='h1Size'> secured shopping</h1>
                        <h2>make your online shopping secured</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>

                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 text-center my-5' data-aos="fade-right">
                        <h1 className='h1Size'>fill your wallet</h1>
                        <h2>you can fill your wallet anytime</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>
                    <div className='col-md-6' data-aos="fade-left">
                        <img src={img115} alt='parallaxImage' className='img-fluid' />
                    </div>
                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 order-12' data-aos="fade-right">
                        <img src={img2680} alt='parallaxImage' className='img-fluid' />
                    </div>

                    <div className='col-md-6 text-center my-5 order-1 order-md-12' data-aos="fade-left">
                        <h1 className='h1Size'>grow your money</h1>
                        <h2>grow your money through automation</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>
                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 text-center my-5' data-aos="fade-right">
                        <h1 className='h1Size'>withdraw money</h1>
                        <h2>gain control over your money</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>
                    <div className='col-md-6' data-aos="fade-left">
                        <img src={img453} alt='parallaxImage' className='img-fluid' />
                    </div>
                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 order-12' data-aos="fade-right">
                        <img src={img2682} alt='parallaxImage' className='img-fluid' />
                    </div>

                    <div className='col-md-6 text-center my-5 order-1 order-md-12' data-aos="fade-left">
                        <h1 className='h1Size'>earn points</h1>
                        <h2>get reward points on every transaction</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>
                </div>
                <div className='row d-flex align-items-center my-5'>
                    <div className='col-md-6 text-center my-5' data-aos="fade-right">
                        <h1 className='h1Size'>easy transactions</h1>
                        <h2>gain control over your money</h2>
                        <button type='button' className='btn btn-outline-dark my-4' data-toggle="modal" data-target="#loginModal" onClick={this.setCondition}>get  started</button>
                    </div>
                    <div className='col-md-6' data-aos="fade-left">
                        <img src={img455} alt='parallaxImage' className='img-fluid' />
                    </div>
                </div>
                {/* <News /> */}
                <Footer />

            </React.Fragment>
        )
    }
}

export default Home