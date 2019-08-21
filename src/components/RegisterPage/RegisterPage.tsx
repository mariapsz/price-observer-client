import React from 'react';
import {RegisterPageState} from './RegisterPageState';
import {MessageWrapper} from '../../styles/RegisterPage/MessageWrapper';
import {RegisterRequest} from '../../dataModels/requests/RegisterRequest';
import {registerUserService} from '../../services/authenticationService';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {Wrapper} from '../../styles/RegisterPage/Wrapper';
import {FormWrapper} from '../../styles/RegisterPage/FormWrapper';
import {InnerFrame} from '../../styles/RegisterPage/Frame';
import {RowWrapper, SubmitButtonWrapper} from '../../styles/RegisterPage/RowWrapper';
import {Label} from '../../styles/RegisterPage/Label';
import {Input} from '../../styles/RegisterPage/Input';
import {Button} from '../../styles/RegisterPage/Button';
import {LinkWrapper} from '../../styles/RegisterPage/LinkWrapper';
import {RegisterLink} from '../../styles/RegisterPage/RegisterLink';
import {Message} from '../../styles/RegisterPage/Message';
import {PasswordWrapper} from '../../styles/RegisterPage/PasswordWrapper';
import {PasswordInput} from '../../styles/RegisterPage/PasswordInput';
import {TogglePasswordVisibility} from '../../styles/RegisterPage/TogglePasswordVisibility';
import {Title} from '../../styles/RegisterPage/Title';
import {trackPromise} from 'react-promise-tracker';
import {withRouter} from 'react-router-dom'

class RegisterPage extends React.Component<any, RegisterPageState> {

    constructor(props: any) {
        super(props);
        this.state = this.getInitialState();
    }

    handleRegistration = (event: React.FormEvent) => {
        event.preventDefault();
        this.register();
    };

    register = () => {
        const registerRequest: RegisterRequest = {body: this.state.user};
        trackPromise(
            registerUserService(registerRequest), 'pageWrapper').then(
            (response: any) => {
                if (!response) {
                    this.setState({
                        errorMessage: 'Wystąpił błąd, prosimy spróbować później',
                    });
                    return;
                }

                if (response.statusCode === 200) {
                    this.showModal('Użytkownik został dodany pomyślnie');
                    this.setState(this.getInitialState());
                    this.props.history.push('/login');
                    return;
                }

                let message;
                switch (response.body.message) {
                    case 'USER_WITH_THIS_EMAIL_ALREADY_EXISTS':
                        message = 'Użytkownik o podanym adresie e-mail już istnieje';
                        break;
                    case 'USER_WITH_THIS_NAME_ALREADY_EXISTS':
                        message = 'Użytkownik o podanej nazwie użytkownika już istnieje';
                        break;
                    default:
                        message = 'Błąd wewnętrzny serwera, prosimy spróbować później';
                        break;
                }
                this.setState({
                    errorMessage: message,
                });
            });
    };

    getInitialState = (): RegisterPageState => {
        return {
            isSubmitDisabled: true,
            user: {
                name: '',
                email: '',
                password: '',
            },
            passwordRepeated: '',
            errorMessage: '',
            isPasswordVisible: false,
            isPasswordCompleted: false,
            isRepeatedPasswordVisible: false,
            isRepeatedPasswordCompleted: false,
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.name !== 'email' ? event.target.value : event.target.value.toLowerCase(),
            }
        });

        if (event.target.name === 'password') {
            this.setState({
                errorMessage: event.target.value.length < 8 ? 'Hasło musi składać się z przynajmniej 8 znaków' : ''
            })
        }
    };

    handleFormState = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
            isPasswordCompleted: event.currentTarget.password.value.length >= 8,
            isRepeatedPasswordCompleted: event.currentTarget.passwordRepeated.value.length >= 8 && (event.currentTarget.passwordRepeated.value === this.state.user.password),
        })
    };

    handleChangePasswordRepeated = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            passwordRepeated: event.target.value,
        })
    };

    showModal = (message: string) => {
        //modal (in the future)
        alert(message);
    };

    handleOnInvalid = (event: React.InvalidEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    showPassword = () => {
        this.setState({
            isPasswordVisible: !this.state.isPasswordVisible,
        });
    };

    showRepeatedPassword = () => {
        this.setState({
            isRepeatedPasswordVisible: !this.state.isRepeatedPasswordVisible,
        });
    };

    render() {
        return (

            <PageWrapper>
                <Wrapper>
                    <FormWrapper>
                        <InnerFrame>
                            <Title>Załóż konto, aby korzystać z serwisu</Title>
                            <form
                                onSubmit={this.handleRegistration}
                                onChange={this.handleFormState}
                                onInvalid={this.handleOnInvalid}>
                                <RowWrapper>
                                    <Label>Nazwa użytkownika</Label>
                                    <Input
                                        name="name"
                                        value={this.state.user.name}
                                        type="text"
                                        maxLength={25}
                                        onChange={this.handleChange}
                                        pattern='^\S+$'
                                        required/>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>E-mail</Label>
                                    <Input
                                        name="email"
                                        value={this.state.user.email}
                                        type="email"
                                        maxLength={25}
                                        onChange={this.handleChange}
                                        required/>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>Hasło</Label>
                                    <PasswordWrapper
                                        isPasswordCompleted={this.state.isPasswordCompleted}>
                                        <PasswordInput
                                            name="password"
                                            type={this.state.isPasswordVisible ? 'text' : 'password'}
                                            value={this.state.user.password}
                                            minLength={8}
                                            maxLength={25}
                                            onChange={this.handleChange}
                                            required/>
                                        <TogglePasswordVisibility
                                            className={this.state.isPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}
                                            onClick={this.showPassword}/>
                                    </PasswordWrapper>
                                </RowWrapper>
                                <RowWrapper>
                                    <Label>Powtórz hasło</Label>
                                    <PasswordWrapper
                                        isPasswordCompleted={this.state.isRepeatedPasswordCompleted}>
                                        <PasswordInput
                                            name="passwordRepeated"
                                            type={this.state.isRepeatedPasswordVisible ? 'text' : 'password'}
                                            value={this.state.passwordRepeated}
                                            minLength={8}
                                            maxLength={25}
                                            onChange={this.handleChangePasswordRepeated}
                                            pattern={'^' + this.state.user.password + '$'}
                                            required/>
                                        <TogglePasswordVisibility
                                            className={this.state.isRepeatedPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}
                                            onClick={this.showRepeatedPassword}/>
                                    </PasswordWrapper>
                                </RowWrapper>
                                <MessageWrapper>
                                    <Message>{this.state.errorMessage || ''}</Message>
                                </MessageWrapper>
                                <SubmitButtonWrapper>
                                    <Button
                                        type='submit' value='ZAREJESTRUJ SIĘ'
                                        disabled={this.state.isSubmitDisabled}/>
                                </SubmitButtonWrapper>
                            </form>
                        </InnerFrame>
                    </FormWrapper>
                    <LinkWrapper>
                        Masz już konto? <RegisterLink to='login'>Zaloguj się</RegisterLink>
                    </LinkWrapper>
                </Wrapper>
            </PageWrapper>
        )
    }
};

export default withRouter(RegisterPage);
