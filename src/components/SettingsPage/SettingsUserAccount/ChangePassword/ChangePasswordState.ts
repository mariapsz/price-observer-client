export interface ChangePasswordState {
    submitButtonDisabled: boolean,
    errorMessage: string | undefined,
    currentPassword: string,
    newPassword: string,
    newPasswordRepeated: string,
}