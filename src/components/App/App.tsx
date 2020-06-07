import React, {Component, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import {ThemeResolver} from '../../hoc/ThemeResolver/ThemeResolver';
import PublicRoute from './PublicRoute';
import {HomePage} from "../HomePage/HomePage";
import '../../i18n';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import SettingsPage from "../SettingsPage/SettingsPage";

class App extends Component {
    render() {
        return (
            <ThemeResolver>
                <Suspense fallback={null}>
                    <I18nextProvider i18n={i18next}>
                        <BrowserRouter>
                            <Switch>
                                <PublicRoute path='/' exact={true} component={LoginPage}/>
                                <PublicRoute path='/rejestracja' component={RegisterPage}/>
                                <PrivateRoute path='/home' component={HomePage}/>
                                <PrivateRoute path='/settings' component={SettingsPage}/>
                                <Route
                                    path="(.*)"
                                    render={() => (
                                        <Redirect to='/'/>
                                    )}/>
                                />
                            </Switch>
                        </BrowserRouter>
                    </I18nextProvider>
                </Suspense>
            </ThemeResolver>
        );
    }
}

export default App;
