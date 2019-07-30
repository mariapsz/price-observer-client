import jwt_decode from "jwt-decode";
import {UserDetails} from '../dataModels/UserDetails';

export const checkIfTokenExpired = (token: string): boolean => {
    const decoded: UserDetails  = jwt_decode(token) as UserDetails;
    return Date.now() > decoded.exp * 1000;
};