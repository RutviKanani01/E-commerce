import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}

export const middlewares = [loggerMiddleware];

export const composedEnhancers = compose(applyMiddleware(...middlewares));

 export const store = createStore(rootReducer, applyMiddleware(...middlewares));
