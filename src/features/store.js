import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import currencyReducer from './currency';
import globalReducer from './global';

const reducer = combineReducers({
  globalReducer,
  currencyReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
