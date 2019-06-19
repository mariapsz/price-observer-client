import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {render} from 'react-dom';

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }):any => (
    <Route {...rest}
        render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )}
    />
);