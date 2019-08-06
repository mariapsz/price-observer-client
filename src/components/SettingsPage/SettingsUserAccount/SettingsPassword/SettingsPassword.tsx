import * as React from 'react';
import {getCookie} from '../../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {SettingsPasswordState} from './SettingsPasswordState';
import {SetPasswordRequest} from '../../../../dataModels/requests';
import {changePasswordService} from '../../../../services/settingsService';
import {SectionTitle} from '../../../../styles/SettingPassword/SectionTitle';
import {Wrapper} from '../../../../styles/SettingPassword/Wrapper';
import {Label} from '../../../../styles/SettingPassword/Label';
import {RowWrapper, SubmitButtonWrapper} from '../../../../styles/SettingPassword/RowWrapper';
import {Input} from '../../../../styles/SettingPassword/Input';
import {SubmitButton} from '../../../../styles/SettingPassword/SubmitButton';

export default class SettingsPassword extends React.Component<{}, SettingsPasswordState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            submitButtonDisabled: true,
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

    handleCurrentPassword = (e: any) => {
        e.preventDefault();
        this.setState({
            currentPassword: e.target.value,
        })
    };

    handleNewPasswordRepeated = (e: any) => {
        e.preventDefault();
        this.setState({
            newPasswordRepeated: e.target.value,
        })
    };


    handleNewPassword = (e: any) => {
        e.preventDefault();
        this.setState({
            newPassword: e.target.value,
        })
    };

    handleFormState = (event: any) => {
        event.preventDefault();
        this.setState({
            submitButtonDisabled: !event.currentTarget.reportValidity(),
        });
    };

    clearInputValues = () => {
        this.setState({
            submitButtonDisabled: false,
            errorMessage: undefined,
            currentPassword: '',
            newPassword: '',
            newPasswordRepeated: '',
        });
    };

    render() {
        return <Wrapper>
            <SectionTitle>ZMIANA HASŁA</SectionTitle>
            <form
                onSubmit={this.handleSubmit}
                onChange={this.handleFormState}>
                <RowWrapper>
                    <Label>Obecne hasło:</Label>
                    <Input
                        name='currentPassword'
                        required
                        type='password'
                        onChange={this.handleCurrentPassword}
                        value={this.state.currentPassword}/>
                </RowWrapper>
                <RowWrapper>
                    <Label>Nowe hasło:</Label>
                    <Input
                        name='newPassword'
                        required
                        type='password'
                        onChange={this.handleNewPassword}
                        value={this.state.newPassword}/>
                </RowWrapper>
                <RowWrapper>
                    <Label>Powtórz nowe hasło:</Label>
                    <Input
                        name='newPasswordRepeated'
                        required
                        type='password'
                        onChange={this.handleNewPasswordRepeated}
                        value={this.state.newPasswordRepeated}
                        pattern={'^' + this.state.newPassword + '$'}
                    />
                </RowWrapper>
                <SubmitButtonWrapper>
                    <SubmitButton
                        disabled={this.state.submitButtonDisabled}
                        type='submit'
                        value='ZMIEŃ HASŁO'/>
                </SubmitButtonWrapper>
            </form>
        </Wrapper>
    }
}


