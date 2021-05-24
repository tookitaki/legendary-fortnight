import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  loginUserSuccess,
  loginUser
} from '../login';

describe('Test for Login actions', () => {
  it('create LOGIN_USER action', () => {
    const expected = {
      type: LOGIN_USER
    };

    const actual = loginUser();
    expect(actual).toEqual(expected);
  });

  it('create LOGIN_USER_SUCCESS action', () => {
    const expected = {
      type: LOGIN_USER_SUCCESS
    };

    const actual = loginUserSuccess();
    expect(actual).toEqual(expected);
  });
});
