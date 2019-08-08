import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import {loadState, saveState} from '../../utils/localStorage';
import {AppState} from './storeDataModels/AppState';

const configureStore = (): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedState = loadState();
    let store: any;
    console.log('persistedState', persistedState);
    store = {
        ...createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
    store.subscribe(() => {
        const state: AppState = store.getState();
        saveState(state);
    });

    return store;
};

export default configureStore;
