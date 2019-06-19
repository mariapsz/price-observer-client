import { Route, Redirect } from 'react-router-dom';
import {render} from "react-dom";
import React, {Component} from 'react';

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
    localStorage.getItem('user')
        ? <Component {...props} />
: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
)} />
)