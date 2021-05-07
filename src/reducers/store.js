import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './index';
import rootSaga from '../sagas/index';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // Add other middleware on this line...
  sagaMiddleware
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
