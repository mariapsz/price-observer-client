import React, {FormEvent} from 'react';
import {connect} from 'react-redux';
import {loginUserAction} from '../../redux/actions/authenticationActions';
import {LoginRequestBody} from '../../dataModels/requests';
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


class LoginPage extends React.Component<LoginPageProps, LoginPageState> {

    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            isSubmitDisabled: true,
        };
    }

    onHandleLogin = (event: any) => {
        event.preventDefault();

        const requestBody: LoginRequestBody = {
            email: event.target.email.value,
            password: event.target.password.value,
        };
        this.props.logIn(requestBody);
    };

    handleFormState = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
        })
    };

    handleOnInvalid = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
    };

    render() {
        return (
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
                                    <Message>{this.props.store.login.errorMessage ? this.props.store.login.errorMessage : ''}</Message>
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
            </PageWrapper>
        );
    }
}

interface LoginPageProps {
    store: AppState,
    logIn: (requestBody: LoginRequestBody) => any,
}

const mapStateToProps = (store: AppState) => ({store});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logIn: (requestBody: LoginRequestBody): any => dispatch(loginUserAction(requestBody)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);