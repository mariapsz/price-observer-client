import React, {Component} from 'react';
import {checkCookie} from '../../utils/cookies';
import {Redirect} from 'react-router-dom';
import {COOKIE_NAME_TOKEN} from '../../config';
import ProductsList from './ProductsList/ProductsList';
import NewProduct from './NewProduct/NewProduct';

export default class DashboardPage extends Component {

    render() {
        return (
            <div>
                {!checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='/login'/>
                    :
                    <div>
                        <NewProduct/>
                        <ProductsList/>
                    </div>}
            </div>
        );
    }
};

