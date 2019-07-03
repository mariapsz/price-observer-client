import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../loginPage/loginPage';
import RegisterPage from '../registerPage/registerPage';
import DashboardPage from '../dashboardPage/dashboardPage';
import DashboardWrapper from '../../hoc/dashboardWrapper/dashboardWrapper';
import SettingsPage from '../SettingsPage/SettingsPage';
import AddNewProductPage from '../AddNewProductPage/addNewProductPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact={true} component={LoginPage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/register' component={RegisterPage}/>
                        <DashboardWrapper>
                            <PrivateRoute path='/dashboard' component={DashboardPage}/>
                            <PrivateRoute path='/addItemURLPage' component={AddNewProductPage}/>
                            <PrivateRoute path='/settings' component={SettingsPage}/>
                        </DashboardWrapper>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;