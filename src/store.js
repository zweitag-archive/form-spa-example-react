import { connectRoutes } from 'redux-first-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import routes from './_router/routes';

import page from './_router/_reducer';
import signup from './signup/_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
} = connectRoutes(history, routes);

const middleware = applyMiddleware(thunk, routerMiddleware);

const store = createStore(
    combineReducers({ location: routerReducer, page, signup }),
    composeEnhancers(routerEnhancer, middleware)
);

export default store;
