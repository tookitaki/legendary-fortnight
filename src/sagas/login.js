import { all, takeEvery, put, call } from 'redux-saga/effects'
import { auth } from '../services/auth';
import {
  LOGIN_USER,
  LOGOUT_USER,
  logoutUser,
  loginUserSuccess
} from '../actions/login'

export function* logoutUserSaga() {
  localStorage.removeItem('token');
}

export function* loginUserSaga(action) {
  try {
    const authResponse = yield call(auth, action.token);
    if (authResponse.status === 200 && authResponse.data &&
      authResponse.data.token) {

      localStorage.setItem('token', authResponse.data.token);
      yield put(loginUserSuccess({ token: authResponse.data.token }));
    } else {
      localStorage.clear();
      yield put(logoutUser());
    }
  } catch (error) {
    yield put(logoutUser());
  }
}

export default function* loginSaga() {
  yield all([
    takeEvery(LOGIN_USER, loginUserSaga),
    takeEvery(LOGOUT_USER, logoutUserSaga),
  ])
}