import { all, takeEvery, put, call } from 'redux-saga/effects';
import { login } from '../services/auth';
import { LOGIN_USER, loginUserSuccess, loginUserFail } from '../actions/login';

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
  yield all([takeEvery(LOGIN_USER, loginUserSaga)]);
}
