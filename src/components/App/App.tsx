import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import {ThemeResolver} from '../../hoc/ThemeResolver/ThemeResolver';
import PublicRoute from './PublicRoute';
import SettingsPage from '../SettingsPage/SettingsPage';

class App extends Component {
    render() {
        return (
            <ThemeResolver>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute path='/' exact={true} component={LoginPage}/>
                        <PublicRoute path='/rejestracja' component={RegisterPage}/>
                        <PrivateRoute path='/home' component={SettingsPage}/>
                        <Route
                            path="(.*)"
                            render={() => (
                                <Redirect to='/' />
                            )} />
                        />
                    </Switch>
                </BrowserRouter>
            </ThemeResolver>
        );
    }
}

export default App;