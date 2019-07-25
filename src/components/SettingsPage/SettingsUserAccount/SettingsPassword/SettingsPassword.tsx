import * as React from 'react';
import {
    Form,
    FormRow,
    FormWrapper,
    Input,
    InputWrapper,
    RowLabel,
    RowWrapper, SubmitButton
} from './SettingsPasswordStyles';
import {getCookie} from '../../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {SettingsPasswordState} from './SettingsPasswordState';
import {SetPasswordRequest} from '../../../../dataModels/requests';
import {changePasswordService} from '../../../../services/settingsService';

export default class SettingsPassword extends React.Component<{}, SettingsPasswordState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isDisabled: false,
            errorMessage: undefined,
            currentPassword: '',
            newPassword: '',
            newPasswordRepeated: '',
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        let request: SetPasswordRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
            currentPassword: e.target.currentPassword.value,
            newPassword: e.target.newPassword.value,
        };
        changePasswordService(request).then(
            (response: any) => alert(response.message),
            () => alert('ERROR')
        )
    };

    handleFormState = (e: any) => {
        this.setState({
            isDisabled: !e.currentTarget.reportValidity(),
        })
    };

    handleNewPasswordRepeated = (e: any) => {
        this.setState({
            newPasswordRepeated: e.target.value,
        })
    };


    handleCurrentPassword = (e: any) => {
        this.setState({
            currentPassword: e.target.value,
        })
    };

    handleNewPassword = (e: any) => {
        this.setState({
            newPassword: e.target.value,
        })
    };

    clearInputValues = () => {
        this.setState({
            isDisabled: false,
            errorMessage: undefined,
            currentPassword: '',
            newPassword: '',
            newPasswordRepeated: '',
        });
    };

    render() {
        return <div>
            <RowLabel>Change password</RowLabel>
            <FormWrapper>
                <Form onSubmit={this.handleSubmit}>
                    <RowWrapper>
                        <FormRow>
                            <RowLabel>Current password</RowLabel>
                            <Input name='currentPassword' required type='password' onChange={this.handleCurrentPassword}
                                   value={this.state.currentPassword}/>
                        </FormRow>
                        <FormRow>
                            <RowLabel>New password</RowLabel>
                            <InputWrapper>
                                <Input name='newPassword' required type='password' onChange={this.handleNewPassword}
                                       value={this.state.newPassword}/>
                            </InputWrapper>
                        </FormRow>
                        <FormRow>
                            <RowLabel>Repeat new password</RowLabel>
                            <InputWrapper>
                                <Input name='newPasswordRepeated' required type='password'
                                       onChange={this.handleNewPasswordRepeated}
                                       value={this.state.newPasswordRepeated}
                                       pattern={'^' + this.state.newPassword + '$'}
                                />
                            </InputWrapper>
                        </FormRow>
                    </RowWrapper>
                    <input disabled={this.state.isDisabled} type='submit' value='Change password'/>
                </Form>
            </FormWrapper>
        </div>
    }
}

