import React, {Component} from 'react';
import {checkCookie, deleteCookie} from '../../utils/cookies';
import {Redirect} from 'react-router-dom';
import {COOKIE_NAME_TOKEN} from '../../config';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ProductsList from '../ProductsList/ProductsList';

export default class DashboardPage extends Component {

    render() {
        return (
            <div>
                {!checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='/login'/>
                    :
                    <div>
                        DASHBOARD
                        <ProductsList/>
                    </div>
                }
            </div>
        );
    }
};

