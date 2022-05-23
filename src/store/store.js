import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist:['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
].filter(
    Boolean
);

// const thunkMiddleware = (store) => (next) => (action) => {
//     const dispatch = useDispatch();

//     if(typeof(action) === 'function') {
//         action(dispatch);
//     }
// }

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

console.log('*****', sagaMiddleware);

export const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
    persistedReducer, 
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);