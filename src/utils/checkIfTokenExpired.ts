import jwt_decode from "jwt-decode";

export const checkIfTokenExpired = (token: string): boolean => {
    const decoded: any = jwt_decode(token);
    return Date.now() > decoded.exp * 1000;
};