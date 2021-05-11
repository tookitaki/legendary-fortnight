import Login from '../Login';
import history from '../../utils/history';
import { fireEvent, render } from '@testing-library/react';

//mocking other components
jest.mock('../Logout', () => () => <div>Logout</div>);

describe('<Login />', () => {
  let props, component;
  beforeEach(() => {
    //Manual Mock 'window.matchMedia'
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });
    history.push = jest.fn();
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
    history.push.mockClear();
  });

  it('should render login snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  it('should call login on clieck of LOGIN button', () => {
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
