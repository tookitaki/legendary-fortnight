import actionCreator from '../utils/action';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';

export const loginUser = actionCreator(LOGIN_USER, 'payload');
export const loginUserSuccess = actionCreator(LOGIN_USER_SUCCESS, 'payload');
export const loginUserFail = actionCreator(LOGIN_USER_FAIL, 'payload');
export const logoutUser = actionCreator(LOGOUT_USER);
export const clearLoginInfo = actionCreator(CLEAR_LOGIN_INFO);
