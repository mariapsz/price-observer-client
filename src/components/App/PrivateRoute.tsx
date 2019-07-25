import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// @ts-ignore
const PrivateRoute = ({ component: Component, store, ...rest }) => {
    return (
    <Route {...rest} render={props => {

        console.log('private route props', props);
        return (
        props.store ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}
            />
        )
        )}}/>)
};

const mapStateToProps = (store: any, ownProps: any) => ({store});
export default withRouter(connect(mapStateToProps)(PrivateRoute));