import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUserAction} from '../../actions/authenticationActions';
import {checkCookie, setCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {LoginRequest} from '../../DataModels/requests';
import {
    Button,
    FormFrame,
    FormWrapper,
    Input,
    Label,
    LinkWrapper,
    RowWrapper,
    LoginWrapper,
    SubmitButtonWrapper,
    RegisterLink,
} from './LoginPageStyles';
import {LoginPageState} from './LoginPageState';


class LoginPage extends Component<any, LoginPageState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isSubmitDisabled: true,
        };
    }

    onHandleLogin = (event: any) => {
        event.preventDefault();

        const user: LoginRequest = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        this.props.dispatch(loginUserAction(user));
    };

    handleFormState = (e: any) => {
        e.preventDefault();

        this.setState({
            isSubmitDisabled: !e.currentTarget.reportValidity(),
        })
    };

    handleOnInvalid = (e: any) => {
        e.preventDefault();
    };

    render() {
        let isSuccess, message;
        if (this.props.store.login.response) {
            isSuccess = this.props.store.login.response.success;
            message = this.props.store.login.response.message;

            if (isSuccess) {
                setCookie(COOKIE_NAME_USER_NAME, this.props.store.login.response.data.nickname, 1);
                setCookie(COOKIE_NAME_TOKEN, this.props.store.login.response.data.token, 1);
            }
        }

        return (
            <div>{isSuccess || checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='dashboard'/>
                :
                <LoginWrapper>
                    <FormWrapper>
                        <FormFrame>
                            <form onSubmit={this.onHandleLogin} onChange={this.handleFormState}>
                                <RowWrapper>
                                    <Label>Email lub nazwa użytkownika</Label>
                                    <Input type="email" name="email" maxLength={25} onInvalid={this.handleOnInvalid} required/>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>Hasło</Label>
                                    <Input type="password" name="password" maxLength={25} onInvalid={this.handleOnInvalid} required/>
                                </RowWrapper>
                                <SubmitButtonWrapper>
                                    <Button type='submit' value='ZALOGUJ SIĘ' disabled={this.state.isSubmitDisabled}/>
                                </SubmitButtonWrapper>
                                <div>{message ? message : ''}</div>
                            </form>
                        </FormFrame>
                    </FormWrapper>
                    <LinkWrapper>
                        Nie masz konta? <RegisterLink to='register'>Zarejestruj się</RegisterLink>
                    </LinkWrapper>
                </LoginWrapper>}
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(LoginPage);