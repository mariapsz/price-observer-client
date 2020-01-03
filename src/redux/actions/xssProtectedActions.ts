import * as types from './index';
import {XssProtectedChangedActionPayload} from "./xssProtectedChangedActionPayload";

export const xssProtectedChanged = (payload: XssProtectedChangedActionPayload) => {
    return {
        type: types.XSS_PROTECTED_CHANGED,
        payload,
    }
};