export interface AuthorizationRequest {
    nickname: string,
    JWT: string,
}

export interface SetPasswordRequest {
    nickname: string,
    JWT: string,
    currentPassword: string,
    newPassword: string,
}