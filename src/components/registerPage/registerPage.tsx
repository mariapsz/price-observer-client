import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {registerUserAction} from '../../actions/authenticationActions';
import {checkCookie} from '../../utils/cookies';
import {COOKIE_NAME} from '../../config';
import {IRegisterFormState} from './IRegisterFormState';

class RegisterPage extends Component<any, IRegisterFormState> {

    constructor() {
        super({});
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
            }
        };
    }

    onHandleRegistration = (event: any) => {
        event.preventDefault();
        this.props.dispatch(registerUserAction(this.state.user));
    };

    handleChange = (event: any) => {
        this.setState({
            user: {...this.state.user, [event.target.name]: event.target.value,}
        })
    };

    showForm = () => (
        <div>
            <h3>RegisterPage</h3>
            <form onSubmit={this.onHandleRegistration}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.user.name}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.user.email}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.user.password}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
            Already have account? <Link to='login'>Login here</Link>
        </div>
    );

    showModal = (message: string, isSuccess: boolean) => {
        //tutaj będzie modal a nie alert
        //'przekieruj na stronę logowania tak/nie'
        let alertMessage = message + 'isSuccess: ' +  isSuccess;
        alert(alertMessage);
    };

    render() {
        let message, isSuccess;

        if (this.props.store.register.response) {
            console.log('this.props.store.register.response', this.props.store.register.response);
            isSuccess = this.props.store.register.response.success;
            message = this.props.store.register.response.message;
            this.showModal(message, isSuccess);
        }

        return (
            <div>
                {checkCookie(COOKIE_NAME) ?
                    <Redirect to='/dashboard'/>
                    :
                    this.showForm()
                }
            </div>
        )
    }
}

const mapStateToProps = (store: any) => ({
    store
});


export default connect(mapStateToProps)(
    RegisterPage
);
