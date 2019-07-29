import React, {Component} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import StartPage from '../StartPage/StartPage';
import {ThemeResolver} from '../../hoc/ThemeResolver/ThemeResolver';
import PublicRoute from './PublicRoute';

class App extends Component {
    render() {
        return (
            <ThemeResolver>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute path='/' exact={true} component={StartPage}/>
                        <PublicRoute path='/login' component={LoginPage}/>
                        <PublicRoute path='/rejestracja' component={RegisterPage}/>
                        <PrivateRoute path='/home' component={DashboardPage}/>
                        <PrivateRoute path='/ustawienia' component={SettingsPage}/>
                    </Switch>
                </BrowserRouter>
            </ThemeResolver>
        );
    }
}

export default App;