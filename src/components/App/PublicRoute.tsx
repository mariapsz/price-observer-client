import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkIfTokenExpired} from '../../utils/checkIfTokenExpired';

// @ts-ignore
const PublicRoute = ({component: Component, store, ...rest}) => {
    console.log('public route');

    return (
        <Route
            {...rest}
            render={props => {
                const userLogged: boolean = (store.login.response && store.login.response.token && !checkIfTokenExpired(store.login.response.token));
                return (
                    !userLogged ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to='/home'/>
                    )
                )
            }}/>)
};

const mapStateToProps = (store: any, ownProps: any) => ({store});
export default withRouter(connect(mapStateToProps)(PublicRoute));