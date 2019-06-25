import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {loginUserAction} from '../../actions/authenticationActions';
import {checkCookie, setCookie} from '../../utils/cookies';
import {COOKIE_NAME} from '../../config';
import {ILoginPageProps} from './ILoginPageProps';

class LoginPage extends Component<any> {

    onHandleLogin = (event: any) => {
        event.preventDefault();

        let email = event.target.email.value;
        let password = event.target.password.value;

        const user = {
            email, password
        };

        this.props.dispatch(loginUserAction(user));
    };

    render() {
        let isSuccess, message;
        if (this.props.store.login.response) {
            isSuccess = this.props.store.login.response.success;
            message = this.props.store.login.response.message;

            if (isSuccess) {
                setCookie(COOKIE_NAME, this.props.store.login.response.token, 1);
            }
        }

        return (
            <div>{isSuccess || checkCookie(COOKIE_NAME) ? <Redirect to='dashboard'/>
                :
                <div>
                    <h3>Login Page</h3>
                    <form onSubmit={this.onHandleLogin}>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password"/>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div>{message ? message : ''}</div>
                    </form>
                    Don't have account? <Link to='register'>Register here</Link>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(LoginPage);