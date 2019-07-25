import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUserAction} from '../../actions/authenticationActions';
import {checkCookie, setCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {LoginRequest} from '../../dataModels/requests';
import {LoginPageState} from './LoginPageState';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {Wrapper} from '../../styles/LoginForm/Wrapper';
import {FormWrapper} from '../../styles/LoginForm/FormFrame';
import {Label} from '../../styles/LoginForm/Label';
import {ResetPasswordLinkWrapper} from '../../styles/LoginForm/ResetPasswordLinkWrapper';
import {ResetPasswordLink} from '../../styles/LoginForm/ResetPasswordLink';
import {RowWrapper, SubmitButtonWrapper} from '../../styles/LoginForm/RowWrapper';
import {Input} from '../../styles/LoginForm/Input';
import {MessageWrapper} from '../../styles/LoginForm/MessageWrapper';
import {Message} from '../../styles/LoginForm/Message';
import {Button} from '../../styles/LoginForm/Button';
import {LinkWrapper} from '../../styles/LoginForm/LinkWrapper';
import {RegisterLink} from '../../styles/LoginForm/RegisterLink';
import {InnerFrame} from '../../styles/LoginForm/Frame';


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
        console.log('login', this.props.store.login);
        if (this.props.store.login.response) {
            isSuccess = this.props.store.login.response.success;
            serverMessage = this.props.store.login.response.message;
        }

        return (
            <div>{isSuccess ? <Redirect to='/home'/>
                :
                <PageWrapper>
                    <Wrapper>
                        <FormWrapper>
                            <InnerFrame>
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
                                        <Button type='submit' value='ZALOGUJ SIĘ'
                                                disabled={this.state.isSubmitDisabled}/>
                                    </SubmitButtonWrapper>
                                </form>
                            </InnerFrame>
                        </FormWrapper>
                        <LinkWrapper>
                            Nie masz konta? <RegisterLink to='rejestracja'>Zarejestruj się</RegisterLink>
                        </LinkWrapper>
                    </Wrapper>
                </PageWrapper>}
            </div>
        );
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(LoginPage);