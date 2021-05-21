import produce from 'immer';

import { SET_PRODUCTS } from '../actions/products';
import { CLEAR_USER_DATA } from '../actions/login';
import createReducer from '../utils/reducer';

export const initialState = {
  list: []
};

const login = createReducer(initialState, {
  [SET_PRODUCTS]: produce((draft, { payload }) => {
    draft.list = payload;
  }),
  [CLEAR_USER_DATA]: () => initialState
});

export default login;
