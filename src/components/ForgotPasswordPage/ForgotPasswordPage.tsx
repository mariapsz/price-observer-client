import * as React from 'react';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';
import {FormWrapper} from '../../styles/LoginForm/FormFrame';
import {InnerFrame} from '../../styles/LoginForm/Frame';
import {RowWrapper, SubmitButtonWrapper} from '../../styles/ForgotPassswordPage/RowWrapper';
import {Label} from '../../styles/ForgotPassswordPage/Label';
import {Input} from '../../styles/LoginForm/Input';
import {PasswordWrapper} from '../../styles/LoginForm/PasswordWrapper';
import {PasswordInput} from '../../styles/LoginForm/PasswordInput';
import {TogglePasswordVisibility} from '../../styles/LoginForm/TogglePasswordVisibility';
import {ResetPasswordLinkWrapper} from '../../styles/LoginForm/ResetPasswordLinkWrapper';
import {ResetPasswordLink} from '../../styles/LoginForm/ResetPasswordLink';
import {MessageWrapper} from '../../styles/LoginForm/MessageWrapper';
import {Message} from '../../styles/LoginForm/Message';
import {Button} from '../../styles/LoginForm/Button';
import {Wrapper} from '../../styles/LoginForm/Wrapper';
import {FormEvent} from 'react';
import {SectionTitle} from '../../styles/Common/SectionTitle';

export interface ForgotPasswordPageState {
    submitButtonDisabled: boolean,
    errorMessage: string | undefined,
}

export default class ForgotPasswordPage extends React.Component<undefined, ForgotPasswordPageState> {

    constructor(props: undefined) {
        super(props);
        this.state = {
            submitButtonDisabled: true,
            errorMessage: undefined,
        };
    }

    handleFormState = (event: any) => {
        event.preventDefault();
        this.setState({
            submitButtonDisabled: !event.currentTarget.reportValidity(),
        })
    };

    resetPassword = () => {

    };

    render() {
        return <PageWrapper>
            <Wrapper>
                <FormWrapper>
                    <InnerFrame>
                        <SectionTitle>
                            RESETOWANIE HASŁA
                        </SectionTitle>
                        <form onSubmit={this.resetPassword}
                              onChange={this.handleFormState}>
                            <RowWrapper>
                                <Label>
                                    Aby zresetować hasło, wpisz adres e-mail, na który zostało założone konto.
                                    <br/>Na ten adres zostanie wysłana wiadomość z linkiem pozwalacjącym na ustalenie nowego
                                    hasła.
                                </Label>
                            </RowWrapper>
                            <RowWrapper>
                                <Label>E-mail</Label>
                                <Input name="email"
                                       type="email"
                                       maxLength={25}
                                       required/>
                            </RowWrapper>
                            <MessageWrapper>
                                <Message>{this.state.errorMessage ? this.state.errorMessage : ''}</Message>
                            </MessageWrapper>
                            <SubmitButtonWrapper>
                                <Button type='submit'
                                        value='RESETUJ HASŁO'
                                        disabled={this.state.submitButtonDisabled}/>
                            </SubmitButtonWrapper>
                        </form>
                    </InnerFrame>
                </FormWrapper>

            </Wrapper></PageWrapper>;
    }
};