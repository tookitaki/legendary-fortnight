import {
  loginUser,
  loginUserSuccess,
  clearLoginInfo
} from '../../actions/login';
import login from '../login';

const initialState = login(undefined, { type: 'UNHANDLED' });

describe('Test for Login reducers', () => {
  it('should have correct initial state', () => {
    expect(initialState).toMatchSnapshot();
  });

  it('Should update log-in-user details', () => {
    const action = loginUser();
    const actual = login(initialState, action);
    expect(actual).toMatchSnapshot();
  });

  it('Should update log-in-user-success details', () => {
    const data = {
      token: 'test-token'
    };
    const action = loginUserSuccess({ data });
    const actual = login(initialState, action);
    expect(actual).toMatchSnapshot();
  });

  it('Should clear login info', () => {
    const action = clearLoginInfo();
    const actual = login({ ...initialState, token: 'token' }, action);
    expect(actual).toMatchSnapshot();
  });
});
