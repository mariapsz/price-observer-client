import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import {loadState, saveState} from '../utils/localStorage';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedState = loadState();
    let store: any;
    console.log('persistedState', persistedState);
    if (persistedState)
        store = {
            ...createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware)),
            runSaga: sagaMiddleware.run(rootSaga)
        };
    else store = {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };

    store.subscribe(() => {
        saveState(store.getState())
    });

    return store;
};

export default configureStore;
