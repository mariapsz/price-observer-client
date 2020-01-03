import {AuthRequest} from "./AuthRequest";

export interface ChangePasswordRequest extends AuthRequest {
    body: {
        currentPassword: string,
        newPassword: string,
    },
}