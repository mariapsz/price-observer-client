import * as React from 'react';
import {ChangePasswordState} from './ChangePasswordState';
import {SectionTitle} from '../../../../styles/ChangePassword/SectionTitle';
import {Wrapper} from '../../../../styles/ChangePassword/Wrapper';
import {Label} from '../../../../styles/ChangePassword/Label';
import {RowWrapper, SubmitButtonWrapper} from '../../../../styles/ChangePassword/RowWrapper';
import {Input} from '../../../../styles/ChangePassword/Input';
import {SubmitButton} from '../../../../styles/ChangePassword/SubmitButton';
import {connect} from 'react-redux';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';
import {ChangePasswordProps} from './ChangePasswordProps';
import {ChangePasswordRequest} from '../../../../dataModels/requests/ChangePasswordRequest';
import {changePasswordService} from '../../../../services/settingsService';
import {Message} from '../../../../styles/ChangePassword/Message';

class ChangePassword extends React.Component<ChangePasswordProps, ChangePasswordState> {

    constructor(props: ChangePasswordProps) {
        super(props);
        this.state = this.getInitialState();
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (e.target.currentPassword.value === e.target.newPassword.value) {
            this.setState({
                errorMessage: 'Nowe hasło musi różnić się od poprzedniego.'
            })
        } else {
            let request: ChangePasswordRequest = {
                body: {
                    currentPassword: e.target.currentPassword.value,
                    newPassword: e.target.newPassword.value,
                },
                token: this.props.store.login.token!,
            };
            changePasswordService(request)
                .then(
                    (response: any) => {
                        if (response.statusCode === 200)
                            this.showModal('Hasło zostało zmienione.');
                        else if (response.body.message && response.body.message === 'INVALID_PASSWORD')
                            this.showModal('Nieprawidłowe hasło');
                        else this.showModal('Wystąpił błąd, prosimy spróbować później.');
                        this.setState(this.getInitialState());
                    }
                )
        }
    };

    handleCurrentPassword = (event: any) => {
        this.setState({
            currentPassword: event.target.value,
        })
    };

    handleNewPasswordRepeated = (event: any) => {
        this.setState({
            newPasswordRepeated: event.target.value,
        })
    };


    handleNewPassword = (event: any) => {
        this.setState({
            newPassword: event.target.value,
            errorMessage: event.target.value.length < 8 ? 'Hasło musi składać się z przynajmniej 8 znaków' : ''
        })
    };

    handleFormState = (event: any) => {
        this.setState({
            submitButtonDisabled: !event.currentTarget.reportValidity(),
        });
    };

    showModal = (message: string) => {
        alert(message);
    };

    getInitialState = (): ChangePasswordState => ({
        submitButtonDisabled: false,
        errorMessage: undefined,
        currentPassword: '',
        newPassword: '',
        newPasswordRepeated: '',
    });

    render() {
        return <Wrapper>
            <SectionTitle>ZMIANA HASŁA</SectionTitle>
            <form
                onSubmit={this.handleSubmit}
                onChange={this.handleFormState}
                onInvalid={(e: any) => e.preventDefault()}>
                <RowWrapper>
                    <Label>Obecne hasło:</Label>
                    <Input
                        name='currentPassword'
                        required
                        type='password'
                        minLength={8}
                        maxLength={25}
                        onChange={this.handleCurrentPassword}
                        value={this.state.currentPassword}/>
                </RowWrapper>
                <RowWrapper>
                    <Label>Nowe hasło:</Label>
                    <Input
                        name='newPassword'
                        required
                        type='password'
                        minLength={8}
                        maxLength={25}
                        onChange={this.handleNewPassword}
                        value={this.state.newPassword}/>
                </RowWrapper>
                <RowWrapper>
                    <Label>Powtórz nowe hasło:</Label>
                    <Input
                        name='newPasswordRepeated'
                        required
                        type='password'
                        minLength={8}
                        maxLength={25}
                        onChange={this.handleNewPasswordRepeated}
                        value={this.state.newPasswordRepeated}
                        pattern={'^' + this.state.newPassword + '$'}
                    />
                </RowWrapper>
                <RowWrapper>
                    <Message>{this.state.errorMessage || ''}</Message>
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

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(ChangePassword);


