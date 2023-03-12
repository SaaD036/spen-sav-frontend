import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlware = [thunk];
const composeEnhancer = compose;
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middlware)),
);

export default store;
