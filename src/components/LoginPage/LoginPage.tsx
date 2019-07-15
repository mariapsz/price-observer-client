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
    Wrapper,
    SubmitButtonWrapper,
    RegisterLink,
    Message,
    ResetPasswordLink,
    MessageWrapper,
    ResetPasswordLinkWrapper,
} from '../../Styles/FormStyles';
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
        let isSuccess, serverMessage;
        if (this.props.store.login.response) {
            isSuccess = this.props.store.login.response.success;
            serverMessage = this.props.store.login.response.message;
            if (isSuccess) {
                setCookie(COOKIE_NAME_USER_NAME, this.props.store.login.response.data.nickname, 1);
                setCookie(COOKIE_NAME_TOKEN, this.props.store.login.response.data.token, 1);
            }
        }

        return (
            <div>{isSuccess || checkCookie(COOKIE_NAME_TOKEN) ? <Redirect to='dashboard'/>
                :
                <Wrapper>
                    <FormWrapper>
                        <FormFrame>
                            <form onSubmit={this.onHandleLogin} onChange={this.handleFormState}>
                                <RowWrapper>
                                    <Label>E-mail</Label>
                                    <Input type="email" name="email" maxLength={25}
                                           onInvalid={this.handleOnInvalid} required/>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>Hasło</Label>
                                    <Input type="password" name="password" maxLength={25}
                                           onInvalid={this.handleOnInvalid} required/>
                                </RowWrapper>
                                <ResetPasswordLinkWrapper>
                                    <ResetPasswordLink to='resetPassword'>Nie pamiętasz hasła?</ResetPasswordLink>
                                </ResetPasswordLinkWrapper>
                                <MessageWrapper>
                                    <Message>{serverMessage ? serverMessage : ''}</Message>
                                </MessageWrapper>
                                <SubmitButtonWrapper>
                                    <Button type='submit' value='ZALOGUJ SIĘ' disabled={this.state.isSubmitDisabled}/>
                                </SubmitButtonWrapper>
                            </form>
                        </FormFrame>
                    </FormWrapper>
                    <LinkWrapper>
                        Nie masz konta? <RegisterLink to='rejestracja'>Zarejestruj się</RegisterLink>
                    </LinkWrapper>
                </Wrapper>}
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(LoginPage);