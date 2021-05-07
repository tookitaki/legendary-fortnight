import actionCreator from '../utils/actionsUtil';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = actionCreator(LOGIN_USER, 'payload');
export const loginUserSuccess = actionCreator(LOGIN_USER_SUCCESS, 'payload');
export const logoutUser = actionCreator(LOGOUT_USER);
