import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from 'modules';

console.log(reducers);

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}