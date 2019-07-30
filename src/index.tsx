import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'index.css';
import configureStore from './redux/store/configureStore';

import App from './components/App/App';
import {Store} from 'redux';
import {AppState} from './redux/store/storeDataModels/AppState';

const store: Store<AppState>  = configureStore();
(window as any).store = store;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

