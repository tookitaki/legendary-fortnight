import produce from 'immer';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_USER_DATA
} from '../actions/login';
import createReducer from '../utils/reducer';

export const initialState = {
  loading: false,
  token: null,
  userId: null,
  name: null,
  error: null
};

const loginUser = produce((draft, action) => {
  draft.loading = true;
  draft.error = null;
});

const loginUserSuccess = produce(
  (draft, { payload: { token, userId, name } }) => {
    draft.loading = false;
    draft.token = token;
    draft.userId = userId;
    draft.name = name;
    draft.error = null;
  }
);

const loginUserFail = produce((draft, { payload: { error } }) => {
  draft.loading = false;
  draft.error = error;
});

const login = createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGIN_USER_SUCCESS]: loginUserSuccess,
  [LOGIN_USER_FAIL]: loginUserFail,
  [CLEAR_USER_DATA]: () => initialState
});

export default login;
