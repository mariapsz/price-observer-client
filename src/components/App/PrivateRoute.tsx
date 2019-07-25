import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkIfTokenExpired} from '../../utils/checkIfTokenExpired';

// @ts-ignore
const PrivateRoute = ({component: Component, store, ...rest}) => {
    console.log('PRivate route');
    return (
        <Route
            {...rest}
            render={props => {
                const userLogged: boolean = (store.login.response && store.login.response.token && !checkIfTokenExpired(store.login.response.token));
                console.log('userLogged', userLogged, props.location);
                return (
                    userLogged ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: {from: props.location}
                        }}
                        />
                    )
                )
            }}/>)
};

const mapStateToProps = (store: any, ownProps: any) => ({store});
export default withRouter(connect(mapStateToProps)(PrivateRoute));