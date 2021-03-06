import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './index';
import rootSaga from '../sagas/index';
import apiMiddleware from '../middlewares/api';

const persistConfig = {
  key: 'tookitaki',
  storage,
  whitelist: ['login'],
  transforms: [
    createTransform(
      (inboundState) => ({ ...inboundState, loading: false, error: null }),
      null,
      { whitelist: ['login'] }
    )
  ]
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  apiMiddleware,
  // Add other middleware on this line...
  sagaMiddleware
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
