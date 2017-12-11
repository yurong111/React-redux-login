import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import toduReducer from './store/reducer.js';

const store = createStore(toduReducer);

const MainApp = () =>
    <Provider store={store}>
        <App />
    </Provider>;


ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
