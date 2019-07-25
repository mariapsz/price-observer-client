import jwt_decode from "jwt-decode";

export const checkIfTokenExpired = (token: string): boolean => {
    const decoded = jwt_decode(token);
    // @ts-ignore
    return Date.now() < decoded.exp * 1000;
};