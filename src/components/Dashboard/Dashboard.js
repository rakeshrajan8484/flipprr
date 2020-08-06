import React from 'react';
import './dashboard.style.scss'
import { Switch, Route,  useLocation } from 'react-router-dom'
import Chart from './Chart';
import Header from './Header';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import AddBranch from './AddBranch';
import BranchTransaction from './BranchTransaction';
import BranchList from './BranchList';
import Display from './Display';
import BranchMaintenance from './BranchMaintenance';
import ReloadPage from './ReloadPage';

const Dashboard = () => {
    
    let location = useLocation();
    return (
        <React.Fragment>
            <Header />

            <div id='dashboard' className='my-5 mx-2'>
                <div className='row content'>
                    <div className='col-md-8'>
                        <CSSTransitionGroup
                            key={location.pathname}
                            transitionAppear={true}
                            transitionAppearTimeout={600}
                            transitionEnterTimeout={600}
                            transitionLeaveTimeout={200}
                            transitionName="SlideIn">
                            <Switch location={location}>
                                <Route path='/dashboard' component={Display} />
                                <Route path='/addBranch' component={AddBranch} />
                                <Route path='/branchList' component={BranchList} />
                                <Route path='/branchTransaction' component={BranchTransaction} />
                                <Route path='/branchMaintenance' component={BranchMaintenance} />
                                <Route path='/reloadPage' component={ReloadPage} />
                            </Switch>
                        </CSSTransitionGroup>
                    </div>
                    
                    <div className='col-md-4'>
                        <Chart />
                    </div>
                </div>
                 
            </div>
        </React.Fragment>
    );
}

export default Dashboard;