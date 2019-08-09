import * as React from 'react';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {FormWrapper} from '../../styles/LoginForm/FormFrame';
import {InnerFrame} from '../../styles/LoginForm/Frame';
import {SubmitButtonWrapper} from '../../styles/ForgotPassswordPage/SubmitButtonWrapper';
import {EmailLabel, Label} from '../../styles/ForgotPassswordPage/Label';
import {MessageWrapper} from '../../styles/LoginForm/MessageWrapper';
import {Message} from '../../styles/LoginForm/Message';
import {Button} from '../../styles/LoginForm/Button';
import {Wrapper} from '../../styles/LoginForm/Wrapper';
import {SectionTitle} from '../../styles/ForgotPassswordPage/SectionTitle';
import {DescriptionWrapper} from '../../styles/ForgotPassswordPage/DescriptionWrapper';
import {InputWrapper} from '../../styles/ForgotPassswordPage/InputWrapper';
import {Input} from '../../styles/ForgotPassswordPage/Input';
import {resetPasswordService} from '../../services/settingsService';
import mailRegex from '../../utils/Regex/mailRegex';
import {ResetPasswordRequest} from '../../dataModels/requests/ResetPasswordRequest';
import {ForgotPasswordPageState} from './ForgotPasswordPageState';
import {withRouter} from 'react-router';

class ForgotPasswordPage extends React.Component<any, ForgotPasswordPageState> {

    constructor(props: any) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = (): ForgotPasswordPageState => ({
        submitButtonDisabled: true,
        serverMessage: undefined,
        email: '',
    });

    handleFormState = (event: any) => {
        event.preventDefault();
        this.setState({
            submitButtonDisabled: !event.currentTarget.reportValidity(),
        })
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mailRegex.test(event.currentTarget.email.value)) {
            this.resetPassword(event.currentTarget.email.value);
        } else {
            this.setState({
                serverMessage: 'Należy wprowadzić adres email',
            });
        }
    };

    resetPassword = (emailAddress: string) => {
        const request: ResetPasswordRequest = {
            body: {email: emailAddress,}
        };
        resetPasswordService(request)
            .then((response: any) => {
                    if (response && response.statusCode == 200) {
                        this.setState(this.getInitialState());
                        this.showModal(`Hasło zostało zmienione.\nNa podany przez Ciebie adres e-mail (${emailAddress}) została wysłana wiadomość z nowym hasłem.`);
                        this.props.history.push('/login');
                    } else {
                        if (response.body.message === 'USER_WITH_THIS_EMAIL_DOES_NOT_EXIST')
                            this.setState({
                                serverMessage: 'Nie istnieje użytkownik o podanym adresie e-mail.',
                            });
                        else this.setState({
                            serverMessage: 'Wystąpił błąd, prosimy spróbować późnie.',
                        })
                    }
                }
            );

    };

    showModal = (message: string) => {
        alert(message);
    };

    handleEmailChange = (event: any) => {
        this.setState({
            email: event.target.value,
        });
    };

    render() {
        return <PageWrapper>
            <Wrapper>
                <FormWrapper>
                    <InnerFrame>
                        <SectionTitle>
                            RESETOWANIE HASŁA
                        </SectionTitle>
                        <form
                            onSubmit={this.handleSubmit}
                            onChange={this.handleFormState}>
                            <DescriptionWrapper>
                                <Label>
                                    Aby zresetować hasło, wpisz adres e-mail, na który zostało założone konto.
                                    <br/>Na ten adres zostanie wysłana wiadomość z linkiem pozwalacjącym na ustawienie
                                    nowego hasła.
                                </Label>
                            </DescriptionWrapper>
                            <InputWrapper>
                                <EmailLabel>E-mail:</EmailLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    onInvalid={(event: any) => event.preventDefault()}
                                    maxLength={30}
                                    required/>
                            </InputWrapper>
                            <MessageWrapper>
                                <Message>{this.state.serverMessage || ''}</Message>
                            </MessageWrapper>
                            <SubmitButtonWrapper>
                                <Button
                                    type='submit'
                                    value='RESETUJ HASŁO'
                                    disabled={this.state.submitButtonDisabled}/>
                            </SubmitButtonWrapper>
                        </form>
                    </InnerFrame>
                </FormWrapper>

            </Wrapper></PageWrapper>;
    }
};

export default withRouter(ForgotPasswordPage);
