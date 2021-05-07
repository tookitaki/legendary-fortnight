import {
  loginUser,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../../actions/login';
import login from '../login';

describe('Test for Login reducers', () => {
  const initialState = {
    isLoggedIn: false,
    loading: false,
    error: null
  };

  it('Should update log-in-user details', () => {
    const action = loginUser();
    const actual = login(initialState, action);
    expect(actual).toEqual({
      isLoggedIn: false,
      loading: true,
      error: null
    });
  });

  it('Should update log-in-user-success details', () => {
    const actual = login(initialState, {
      type: LOGIN_USER_SUCCESS,
      payload: { token: 'test-token' }
    });
    expect(actual).toEqual({
      isLoggedIn: true,
      loading: false,
      error: null,
      auth: {
        token: 'test-token'
      }
    });
  });

  it('Should update logout details', () => {
    const actual = login(initialState, {
      type: LOGOUT_USER
    });
    expect(actual).toEqual(initialState);
  });
});
