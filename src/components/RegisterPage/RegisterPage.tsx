import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {checkCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN} from '../../config';
import {RegisterFormState} from './RegisterFormState';
import {
    Button,
    FormFrame,
    FormWrapper,
    Input,
    Label,
    LinkWrapper,
    Wrapper,
    Message,
    MessageWrapper,
    RegisterLink,
    RowWrapper,
    SubmitButtonWrapper
} from '../../Styles/FormStyles';
import {RegisterRequest} from '../../DataModels/requests';
import {registerUserService} from '../../services/authenticationService';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';

export default class RegisterPage extends Component<{}, RegisterFormState> {

    constructor() {
        super({});
        this.state = {
            isSubmitDisabled: true,
            user: {
                nickname: '',
                email: '',
                password: '',
            },
            passwordRepeated: '',
            serverMessage: '',
        };
    }

    handleRegistration = (event: any) => {
        event.preventDefault();
        this.register();
    };

    register = () => {
        let registerRequest: RegisterRequest = this.state.user;
        registerUserService(registerRequest).then(
            (response: any) => {
                if (response.status === 'success') {
                    this.showModal(response.message);
                    this.setStateInitialValues();
                } else {
                    this.setState({
                        serverMessage: response.message,
                    })
                }
            }
        )
    };

    setStateInitialValues = () => {
        this.setState({
            isSubmitDisabled: true,
            user: {
                nickname: '',
                email: '',
                password: '',
            },
            passwordRepeated: '',
            serverMessage: '',
        })
    };

    handleChange = (event: any) => {
        this.setState({
            user: {...this.state.user, [event.target.name]: event.target.value,}
        })
    };

    handleFormState = (event: any) => {
        event.preventDefault();

        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
        })
    };

    handleChangePasswordRepeated = (event: any) => {
        this.setState({
            passwordRepeated: event.target.value,
        })
    };

    showModal = (message: string) => {
        //tutaj będzie modal a nie alert
        //'przekieruj na stronę logowania tak/nie'
        let alertMessage = message;
        alert(alertMessage);
    };

    handleOnInvalid = (event: any) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                {checkCookie(COOKIE_NAME_TOKEN) ?
                    <Redirect to='/dashboard'/>
                    :
                    <PageWrapper>
                        <Wrapper>
                            <FormWrapper>
                                <FormFrame>
                                    <form onSubmit={this.handleRegistration} onChange={this.handleFormState}>
                                        <RowWrapper>
                                            <Label>Nazwa użytkownika</Label>
                                            <Input type="text" name="nickname" maxLength={25}
                                                   onInvalid={this.handleOnInvalid} value={this.state.user.nickname}
                                                   onChange={this.handleChange} required/>
                                        </RowWrapper>
                                        <RowWrapper>
                                            <Label>E-mail</Label>
                                            <Input type="email" name="email" maxLength={25}
                                                   onInvalid={this.handleOnInvalid} value={this.state.user.email}
                                                   onChange={this.handleChange} required/>
                                        </RowWrapper>
                                        <RowWrapper>
                                            <Label>Hasło</Label>
                                            <Input type="password" name="password" maxLength={25}
                                                   onInvalid={this.handleOnInvalid} value={this.state.user.password}
                                                   onChange={this.handleChange} required/>
                                        </RowWrapper>
                                        <RowWrapper>
                                            <Label>Powtórz hasło</Label>
                                            <Input type="password" maxLength={25}
                                                   onInvalid={this.handleOnInvalid} value={this.state.passwordRepeated}
                                                   onChange={this.handleChangePasswordRepeated}
                                                   pattern={'^' + this.state.user.password + '$'} required/>
                                        </RowWrapper>
                                        <MessageWrapper>
                                            <Message>{this.state.serverMessage ? this.state.serverMessage : ''}</Message>
                                        </MessageWrapper>
                                        <SubmitButtonWrapper>
                                            <Button type='submit' value='ZAREJESTRUJ SIĘ'
                                                    disabled={this.state.isSubmitDisabled}/>
                                        </SubmitButtonWrapper>
                                    </form>
                                </FormFrame>
                            </FormWrapper>
                            <LinkWrapper>
                                Masz już konto? <RegisterLink to='login'>Zaloguj się</RegisterLink>
                            </LinkWrapper>
                        </Wrapper>
                    </PageWrapper>
                }
            </div>
        )
    }
};
