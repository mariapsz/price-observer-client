import React from 'react';
import {RegisterFormState} from './RegisterFormState';
import {MessageWrapper} from '../../styles/RegisterPage/MessageWrapper';
import {RegisterRequest} from '../../dataModels/requests';
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

export default class RegisterPage extends React.Component<{}, RegisterFormState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isSubmitDisabled: true,
            user: {
                name: '',
                email: '',
                password: '',
            },
            passwordRepeated: '',
            errorMessage: '',
        };
    }

    handleRegistration = (event: React.FormEvent) => {
        event.preventDefault();
        this.register();
    };

    register = () => {
        const registerRequest: RegisterRequest = this.state.user;
        registerUserService(registerRequest).then(
            (response: any) => {
                console.log(response);
                if (response.statusCode === 200) {
                    this.showModal('Użytkownik został dodany pomyślnie');
                    this.setStateInitialValues();
                } else {
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
                }
            });
    };


    setStateInitialValues = () => {
        this.setState({
            isSubmitDisabled: true,
            user: {
                name: '',
                email: '',
                password: '',
            },
            passwordRepeated: '',
            errorMessage: '',
        })
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: {...this.state.user, [event.target.name]: event.target.name !== 'email' ? event.target.value : event.target.value.toLowerCase(),}
        })
    };

    handleFormState = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
        })
    };

    handleChangePasswordRepeated = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            passwordRepeated: event.target.value,
        })
    };

    showModal = (message: string) => {
        //tutaj będzie modal a nie alert
        //'przekieruj na stronę logowania tak/nie'
        const alertMessage = message;
        alert(alertMessage);
    };

    handleOnInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
        event.preventDefault();
    };

    render() {
        return (

            <PageWrapper>
                <Wrapper>
                    <FormWrapper>
                        <InnerFrame>
                            <form onSubmit={this.handleRegistration} onChange={this.handleFormState}>
                                <RowWrapper>
                                    <Label>Nazwa użytkownika</Label>
                                    <Input type="text" name="name" maxLength={25}
                                           onInvalid={this.handleOnInvalid} value={this.state.user.name}
                                           onChange={this.handleChange}
                                           pattern='^\S+$' required/>
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
                                    <Message>{this.state.errorMessage ? this.state.errorMessage : ''}</Message>
                                </MessageWrapper>
                                <SubmitButtonWrapper>
                                    <Button type='submit' value='ZAREJESTRUJ SIĘ'
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
}
;
