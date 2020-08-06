import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import './registration.style.scss'
import Registration from './Registration';
import Congratulations from './Congratulations';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ResetPassword from './ResetPassword';
import ThankYou from './ThankYou';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory(); 

function WelcomeScreen() {
    let location = useLocation();
    console.log("location key ", location);
    
    return (
        <div id='welcomeScreen' >
            <CSSTransitionGroup
                key={location.pathname}
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="SlideIn">
                <Switch location={location} history={history}>
                    <Route exact path="/" component={Login} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Registration" component={Registration} />
                    <Route path="/Congratulations" component={Congratulations} />
                    <Route path="/ForgotPassword" component={ForgotPassword} />
                    <Route path="/ResetPassword" component={ResetPassword} />
                    <Route path="/ThankYou" component={ThankYou} />
                </Switch>
            </CSSTransitionGroup>
        </div>
    )
}

export default WelcomeScreen