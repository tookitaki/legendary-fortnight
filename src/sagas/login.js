import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { login, logout } from '../services/auth';
import {
  LOGIN_USER,
  LOGOUT_USER,
  loginUserSuccess,
  loginUserFail
} from '../actions/login';
import { getLoginDetails } from '../selectors/login';

export function* logoutUserSaga() {
  try {
    const { token } = select(getLoginDetails);
    yield call(logout, token);
  } catch (error) {
    console.error(error);
  }
}

export function* loginUserSaga({ payload: { username, password } }) {
  try {
    const authResponse = yield call(login, { username, password });
    if (authResponse.status === 200 && authResponse.data?.token) {
      const { token, userId, name } = authResponse.data;

      yield put(loginUserSuccess({ token, userId, name }));
    } else {
      yield put(loginUserFail({ error: 'Unable to login' }));
    }
  } catch (error) {
    yield put(loginUserFail({ error }));
  }
}

export default function* loginSaga() {
  yield all([
    takeEvery(LOGIN_USER, loginUserSaga),
    takeEvery(LOGOUT_USER, logoutUserSaga)
  ]);
}
