import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {apiReducer, apiMiddleware} from './modules/api';

const preloadedState = {};

const store = createStore(
  combineReducers({
    api: apiReducer
  }),
  preloadedState,
  composeWithDevTools(applyMiddleware(apiMiddleware, thunk))
);

export default store;