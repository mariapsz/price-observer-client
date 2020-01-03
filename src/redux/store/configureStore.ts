import {applyMiddleware, createStore, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import {loadState, saveState} from '../../utils/localStorage';
import {AppState} from './storeDataModels/AppState';

const configureStore = (): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedState = loadState();
    let store: any;
    store = {
        ...createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
    store.subscribe(() => {
        const state: AppState = store.getState();
        saveState({...state, login: {...state.login, errorMessage: ''}});
    });
    return store;
};

export default configureStore;
