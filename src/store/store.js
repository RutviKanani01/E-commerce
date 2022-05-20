import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk,
].filter(
    Boolean
);

const thunkMiddleware = (store) => (next) => (action) => {
    const dispatch = useDispatch();

    if(typeof(action) === 'function') {
        action(dispatch);
    }
}

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

export const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
    persistedReducer, 
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);