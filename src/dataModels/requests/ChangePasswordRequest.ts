export interface ChangePasswordRequest {
    body: {
        currentPassword: string,
        newPassword: string,
    },
    token: string,
}