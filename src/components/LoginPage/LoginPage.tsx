import React, {FormEvent} from 'react';
import {connect} from 'react-redux';
import {loginErrorMessageRead, loginUserAction} from '../../redux/actions/authenticationActions';
import {LoginRequest} from '../../dataModels/requests/LoginRequest';
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
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {Dispatch} from 'redux';
import {PasswordWrapper} from '../../styles/LoginForm/PasswordWrapper';
import {TogglePasswordVisibility} from '../../styles/LoginForm/TogglePasswordVisibility';
import {PasswordInput} from '../../styles/LoginForm/PasswordInput';
import {LoginPageProps} from './LoginPageProps';
import {trackPromise} from 'react-promise-tracker';


class LoginPage extends React.Component<LoginPageProps, LoginPageState> {

    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            isSubmitDisabled: true,
            isPasswordVisible: false,
            isPasswordCompleted: false,
        };
    }

    onHandleLogin = (event: any) => {
        event.preventDefault();

        const requestBody: LoginRequest = {
            body: {
                email: event.target.email.value,
                password: event.target.password.value,
            }
        };
        this.props.notifyErrorMessageRead();
        this.props.logIn(requestBody);
    };

    handleFormState = (event: any) => {
        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
            isPasswordCompleted: event.currentTarget.password.value.length > 0,
        })
    };

    handleOnInvalid = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    showPassword = () => {
        this.setState({
            isPasswordVisible: !this.state.isPasswordVisible,
        });
    };

    componentWillUnmount(): void {
        this.props.notifyErrorMessageRead();
    }

    render() {
        return (
            <PageWrapper>
                <Wrapper>
                    <FormWrapper>
                        <InnerFrame>
                            <form
                                onSubmit={this.onHandleLogin}
                                onChange={this.handleFormState}
                                onInvalid={this.handleOnInvalid}>
                                <RowWrapper>
                                    <Label>E-mail</Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        maxLength={25}
                                        required/>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>Hasło</Label>
                                    <PasswordWrapper
                                        isPasswordCompleted={this.state.isPasswordCompleted}>
                                        <PasswordInput
                                            name="password"
                                            type={this.state.isPasswordVisible ? 'text' : 'password'}
                                            maxLength={25}
                                            required/>
                                        <TogglePasswordVisibility
                                            className={this.state.isPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}
                                            onClick={this.showPassword}/>
                                    </PasswordWrapper>
                                </RowWrapper>
                                <ResetPasswordLinkWrapper>
                                    <ResetPasswordLink to='/password_reminder'>Nie pamiętasz hasła?</ResetPasswordLink>
                                </ResetPasswordLinkWrapper>
                                <MessageWrapper>
                                    <Message>{this.props.store.login.errorMessage || ''}</Message>
                                </MessageWrapper>
                                <SubmitButtonWrapper>
                                    <Button
                                        type='submit'
                                        value='ZALOGUJ SIĘ'
                                        disabled={this.state.isSubmitDisabled}/>
                                </SubmitButtonWrapper>
                            </form>
                        </InnerFrame>
                    </FormWrapper>
                    <LinkWrapper>
                        Nie masz konta? <RegisterLink to='rejestracja'>Zarejestruj się</RegisterLink>
                    </LinkWrapper>
                </Wrapper>
            </PageWrapper>
        );
    }
}


const mapStateToProps = (store: AppState) => ({store});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logIn: (requestBody: LoginRequest): any => dispatch(loginUserAction(requestBody)),
        notifyErrorMessageRead: (): any => dispatch(loginErrorMessageRead()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);