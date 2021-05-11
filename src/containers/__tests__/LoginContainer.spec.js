import { getLoginDetails } from '../../selectors/loginSelector';
import { mapDispatchToProps, mapStateToProps } from '../LoginContainer';

describe('LoginContainer', () => {
  it('should get login details from store', () => {
    const state = {
      login: {
        loading: false,
        isLoggedIn: false,
        error: null
      }
    };
    const store = {
      login: getLoginDetails(state)
    };
    expect(mapStateToProps(store).login).toEqual({
      loading: false,
      isLoggedIn: false,
      error: null
    });
  });

  it('should dispatch action to store', () => {
    const dispatch = jest.fn();
    const expected = {
      type: 'LOGIN_USER',
      payload: undefined
    };
    mapDispatchToProps(dispatch).dispatchLoginUser();
    expect(dispatch).toHaveBeenCalledWith(expected);
  });
});
