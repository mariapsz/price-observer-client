export interface SettingsPasswordState {
    submitButtonDisabled: boolean,
    errorMessage: string | undefined,
    currentPassword: string,
    newPassword: string,
    newPasswordRepeated: string,
}