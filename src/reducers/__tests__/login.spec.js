import { loginUser, loginUserSuccess, logoutUser } from '../../actions/login';
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
    const data = {
      token: 'test-token',
      userId: 1,
      name: 'tdss_user'
    };
    const action = loginUserSuccess({ data });
    const actual = login(initialState, action);
    expect(actual).toEqual({
      isLoggedIn: true,
      loading: false,
      error: null,
      auth: {
        token: 'test-token',
        userId: 1,
        name: 'tdss_user'
      }
    });
  });

  it('Should update logout details', () => {
    const action = logoutUser();
    const actual = login(initialState, action);
    expect(actual).toEqual(initialState);
  });
});
