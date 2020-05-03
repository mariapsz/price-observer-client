import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkIfTokenExpired} from '../../utils/checkIfTokenExpired';
import {AppState} from '../../redux/store/storeDataModels/AppState';

// @ts-ignore
const PrivateRoute = ({component: Component, store, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                const userLogged: boolean = (store.login.token && !checkIfTokenExpired(store.login.token));
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

const mapStateToProps = (store: AppState, ownProps: any) => ({store});
export default withRouter(connect(mapStateToProps)(PrivateRoute));