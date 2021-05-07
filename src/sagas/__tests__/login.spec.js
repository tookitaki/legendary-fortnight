import { LOGIN_USER, LOGOUT_USER } from '../../actions/login';
import { all, takeEvery } from 'redux-saga/effects';

import loginSaga, { loginUserSaga, logoutUserSaga } from '../login';

describe('Test for Login saga', () => {
  it('Should watch loginSaga', () => {
    const callSaga = loginSaga();
    const next = callSaga.next();
    expect(next.value).toEqual(
      all([
        takeEvery(LOGIN_USER, loginUserSaga),
        takeEvery(LOGOUT_USER, logoutUserSaga)
      ])
    );
  });
});
