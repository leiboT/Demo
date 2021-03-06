import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducers from './store/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import FastClick from 'fastclick';
FastClick.attach(document.body);

const history = createBrowserHistory()
const middleWare = routerMiddleware(history)
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleWare, thunk)
)

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Root />
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
