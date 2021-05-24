import actionCreator from '../utils/action';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export const loginUser = actionCreator(LOGIN_USER, 'payload');
export const loginUserSuccess = actionCreator(LOGIN_USER_SUCCESS, 'payload');
export const loginUserFail = actionCreator(LOGIN_USER_FAIL, 'payload');
export const clearUserData = actionCreator(CLEAR_USER_DATA);

export const logoutUser = () => ({
  type: LOGOUT_USER,
  meta: {
    api: true
  },
  payload: {
    path: 'users/session',
    method: 'delete',
    onSuccess: [clearUserData],
    onError: [clearUserData]
  }
});
