import {removeState} from './localStorage';

export const logoutUser = () => {
    removeState();
    window.location.reload();
};