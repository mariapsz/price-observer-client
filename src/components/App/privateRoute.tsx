import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../../utils/cookies';
import {COOKIE_NAME_TOKEN} from '../../config';

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route {...rest} render={props => (
        checkCookie(COOKIE_NAME_TOKEN) !== null ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}
            />
        )
    )}/>)
};

export default PrivateRoute;