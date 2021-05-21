import { all, takeEvery, put, call } from 'redux-saga/effects';
import { auth, logout } from '../services/auth';
import {
  LOGIN_USER,
  LOGOUT_USER,
  logoutUser,
  loginUserSuccess,
  loginUserFail
} from '../actions/login';
import {
  clearLocalStorage,
  getItemFromLocalStorage,
  setItemToLocalStorage
} from '../utils/general';

export function* logoutUserSaga() {
  try {
    const token = getItemFromLocalStorage('token');
    const authResponse = yield call(logout, token);
    if (authResponse.status === 200) {
      clearLocalStorage();
    }
  } catch (error) {
    yield put(logoutUser());
  }
}

export function* loginUserSaga(action) {
  try {
    const authResponse = yield call(auth, action.payload);
    if (authResponse.status === 200 && authResponse.data?.token) {
      setItemToLocalStorage('token', authResponse.data.token);
      yield put(loginUserSuccess({ data: authResponse.data }));
    } else {
      clearLocalStorage();
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
