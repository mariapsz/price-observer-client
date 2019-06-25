import React, {Component} from 'react';
import {checkCookie, deleteCookie} from '../../utils/cookies';
import {Redirect} from 'react-router-dom';
import {COOKIE_NAME} from '../../config';

export default class DashboardPage extends Component {

    logoutUser = () => {
        deleteCookie(COOKIE_NAME);
        window.location.reload();
    };

    render() {
        return (
            <div>
                {!checkCookie(COOKIE_NAME) ? <Redirect to='/login'/>
                    :
                    <div>
                        <div>Dashboard</div>
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>}
            </div>
        );
    }
};

