import {AppState} from '../redux/store/storeDataModels/AppState';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null)
            return undefined;
        const state = JSON.parse(serializedState);
        delete state.login.errorMessage;
        return state;
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state: AppState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        //
    }
};

export const removeState = () => {
    try {
        localStorage.removeItem('state');
    } catch (error) {
        return undefined;
    }
};