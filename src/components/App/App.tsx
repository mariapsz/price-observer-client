import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/loginPage';
import RegisterPage from '../RegisterPage/registerPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import DashboardWrapper from '../../hoc/dashboardWrapper/dashboardWrapper';
import NewProduct from '../DashboardPage/NewProduct/NewProduct';
import SettingsPage from '../SettingsPage/SettingsPage';

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
                            <PrivateRoute path='/addItemURLPage' component={NewProduct}/>
                            <PrivateRoute path='/settings' component={SettingsPage}/>
                        </DashboardWrapper>DashboardWrapper>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;