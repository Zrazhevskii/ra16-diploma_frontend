import { compose, legacy_createStore, applyMiddleware } from 'redux';
import { mainReducer } from './mainReduser';
import { thunk } from 'redux-thunk';

const state = legacy_createStore(
    mainReducer,
    compose(applyMiddleware(thunk))
);

export default state;
