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
import {trackPromise} from 'react-promise-tracker';

export interface ForgotPasswordPageState {
    submitButtonDisabled: boolean,
    errorMessage: string | undefined,
    email: string,
}

export default class ForgotPasswordPage extends React.Component<undefined, ForgotPasswordPageState> {

    constructor(props: undefined) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = (): ForgotPasswordPageState => ({
        submitButtonDisabled: true,
        errorMessage: undefined,
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
                errorMessage: 'Należy wprowadzić adres email',
            });
        }
    };

    resetPassword = (emailAddress: string) => {
        const request: ResetPasswordRequest = {
            body: {email: emailAddress,}
        };
        let result: any;
        trackPromise(
            resetPasswordService(request)
                .then((res: any) => {
                    result = res;
                }), 'pageWrapper').then(
            () => {
                if (result && result.statusCode == 200) {
                    this.setState(this.getInitialState());
                    this.showModal(`Hasło zostało zmienione.\nNa podany przez Ciebie adres e-mail (${emailAddress}) została wysłana wiadomość z nowym hasłem.`);
                } else
                    this.setState({
                        errorMessage: 'Wystąpił błąd, prosimy spróbować później',
                    })
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
                                <Message>{this.state.errorMessage || ''}</Message>
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