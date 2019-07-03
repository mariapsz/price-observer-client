export interface SettingsPasswordState {
    isDisabled: boolean,
    errorMessage: string | undefined,
    currentPassword: string,
    newPassword: string,
    newPasswordRepeated: string,
}