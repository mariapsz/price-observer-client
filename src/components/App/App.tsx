import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
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
                        <DashboardWrapper>
                            <Route path='/' exact={true} component={LoginPage}/>
                            <Route path='/login' component={LoginPage}/>
                            <Route path='/rejestracja' component={RegisterPage}/>
                            <PrivateRoute path='/home' component={DashboardPage}/>
                            <PrivateRoute path='/ustawienia' component={SettingsPage}/>
                        </DashboardWrapper>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;