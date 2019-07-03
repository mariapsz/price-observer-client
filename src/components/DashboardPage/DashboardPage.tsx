import React, {Component} from 'react';
import {checkCookie, deleteCookie} from '../../utils/cookies';
import {Redirect} from 'react-router-dom';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import ProductsList from '../ProductsList/ProductsList';

export default class DashboardPage extends Component {

    logoutUser = () => {
        deleteCookie(COOKIE_NAME_TOKEN);
        deleteCookie(COOKIE_NAME_USER_NAME);
        window.location.reload();
    };

    render() {
        return (
            <div>
                {!checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='/login'/>
                    :
                    <div>
                        <div>Dashboard</div>
                        <ProductsList/>
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>}
            </div>
        );
    }
};

