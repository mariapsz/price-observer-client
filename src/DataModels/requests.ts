import {Product} from './Product';

export interface Requests {
    nickname: string,
    JWT: string,
    product: Product,
}

export interface AuthorizationRequest {
    nickname: string,
    JWT: string,
}

export interface LoginRequest {
    email: string,
    password: string,
}

export interface RegisterRequest {
    nickname: string,
    email: string,
    password: string,
}

export interface SetPasswordRequest {
    nickname: string,
    JWT: string,
    currentPassword: string,
    newPassword: string,
}