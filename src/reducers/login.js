import produce from 'immer';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from '../actions/login';
import createReducer from '../utils/reducer';

export const initialState = { loading: false, token: null, error: null };

const loginUser = produce((draft, action) => {
  draft.loading = true;
  draft.error = null;
});

const loginUserSuccess = produce((draft, { payload: { token } }) => {
  draft.loading = false;
  draft.token = token;
  draft.error = null;
});

const loginUserFail = produce((draft, { payload: { error } }) => {
  draft.loading = false;
  draft.error = error;
});

const logoutUser = () => {
  return initialState;
};

const login = createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGIN_USER_SUCCESS]: loginUserSuccess,
  [LOGIN_USER_FAIL]: loginUserFail,
  [LOGOUT_USER]: logoutUser
});

export default login;
