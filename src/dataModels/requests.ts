import {ProductData} from './ProductData';

export interface AddProductRequest {
    nickname: string,
    JWT: string,
    product: ProductData,
}

export interface AuthorizationRequest {
    nickname: string,
    JWT: string,
}

export interface LoginRequestBody {
    email: string,
    password: string,
}

export interface RegisterRequest {
    name: string,
    email: string,
    password: string,
}

export interface SetPasswordRequest {
    nickname: string,
    JWT: string,
    currentPassword: string,
    newPassword: string,
}