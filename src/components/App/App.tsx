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
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';
import SettingsPage from '../SettingsPage/SettingsPage';
import StartPage from '../StartPage/StartPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={StartPage}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/rejestracja' component={RegisterPage}/>
                    <DashboardPageWrapper>
                        <PrivateRoute path='/home' component={DashboardPage}/>
                        <PrivateRoute path='/ustawienia' component={SettingsPage}/>
                    </DashboardPageWrapper>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;