import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import StartPage from '../StartPage/StartPage';
import {ThemeResolver} from '../../hoc/ThemeResolver/ThemeResolver';
import PublicRoute from './PublicRoute';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import {initializeReactGA} from '../../utils/GA';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';

initializeReactGA();
const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
});

class App extends Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <ThemeResolver>
                <BrowserRouter>
                    <Router history={history}>
                        <PublicRoute path='/' exact={true} component={StartPage}/>
                        <PublicRoute path='/login' component={LoginPage}/>
                        <PublicRoute path='/password_reminder' component={ForgotPasswordPage}/>
                        <PublicRoute path='/rejestracja' component={RegisterPage}/>
                        <PrivateRoute path='/home' component={DashboardPage}/>
                        <PrivateRoute path='/ustawienia' component={SettingsPage}/>
                        <Route
                            path="(.*)"
                            render={() => (
                                <Redirect to='/'/>
                            )}/>
                        />
                    </Router>
                </BrowserRouter>
            </ThemeResolver>
        );
    }
}

export default App;