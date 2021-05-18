import { all, takeEvery, put, call } from 'redux-saga/effects';
import { auth, logout } from '../services/auth';
import {
  LOGIN_USER,
  LOGOUT_USER,
  logoutUser,
  loginUserSuccess,
  loginUserFail
} from '../actions/login';

export function* logoutUserSaga() {
  try {
    const token = localStorage.getItem('token');
    const authResponse = yield call(logout, token);
    if (authResponse.status === 200) {
      localStorage.removeItem('token');
    }
    localStorage.removeItem('token');
  } catch (error) {
    yield put(logoutUser());
  }
}

export function* loginUserSaga(action) {
  try {
    const authResponse = yield call(auth, action.payload);
    if (authResponse.status === 200 && authResponse.data?.token) {
      localStorage.setItem('token', authResponse.data.token);
      yield put(loginUserSuccess({ token: authResponse.data.token }));
    } else {
      localStorage.clear();
      yield put(logoutUser());
    }
  } catch (error) {
    yield put(loginUserFail());
  }
}

export default function* loginSaga() {
  yield all([
    takeEvery(LOGIN_USER, loginUserSaga),
    takeEvery(LOGOUT_USER, logoutUserSaga)
  ]);
}
