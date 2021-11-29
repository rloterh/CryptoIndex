import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './currency';
import globalReducer from './global';

const reducer = combineReducers({
  globalReducer,
  currencyReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
