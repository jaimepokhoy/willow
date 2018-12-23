/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas';
import gameReducer from './reducers/gameReducer';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(gameReducer,
        applyMiddleware(sagaMiddleware)
    );
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
