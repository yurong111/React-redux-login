import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import toduReducer from './store/reducer.js';
import apiMiddlewares from './store/middlewares/apiMiddlewares'

const middleware = [apiMiddlewares];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;    /*redux在浏览器查看*/

const store = createStore(toduReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)  /*中间件，处理接口异步调用*/
));

const MainApp = () =>

    <Provider store={store}>
        <App />
    </Provider>;


ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
