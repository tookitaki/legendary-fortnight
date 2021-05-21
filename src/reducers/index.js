import { combineReducers } from 'redux';
import login from './login';
import network from './network';
import products from './products';

const appReducer = combineReducers({
  login,
  network,
  products
});

export default appReducer;
