import { Login } from '../Login';
import history from '../../utils/history';
import { fireEvent, render } from '@testing-library/react';
import { mockWindowMatchmedia } from '../../utils/tests';

//mocking other components
jest.mock('../Logout', () => () => <div>Logout</div>);

describe('<Login />', () => {
  let props, component;
  beforeEach(() => {
    mockWindowMatchmedia();
    history.push = jest.spyOn(history, 'push');
    props = {
      login: {
        loading: false,
        isLoggedIn: false,
        error: null
      },
      dispatchLoginUser: jest.fn(),
      dispatchLogoutUser: jest.fn()
    };
    component = render(<Login {...props} />);
  });

  afterEach(() => {
    history.push.mockRestore();
  });

  it('should render login component with dispaly text Login', () => {
    const { queryAllByText } = component;
    const logout = queryAllByText('Login');
    expect(logout).toHaveLength(2);
  });

  it('should call login on click of LOGIN button', () => {
    const { getByTestId } = component;

    const username = getByTestId('username');
    fireEvent.change(username, { target: { value: 'test-username' } });

    const password = getByTestId('password');
    fireEvent.change(password, { target: { value: 'test-password' } });

    const login = getByTestId('login');
    fireEvent.click(login, { preventDefault: jest.fn() });

    const str = `test-username:test-password`;
    expect(props.dispatchLoginUser).toHaveBeenCalledWith(btoa(str));
  });
});
