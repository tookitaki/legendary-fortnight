import { Logout } from '../Logout';
import { fireEvent, render } from '@testing-library/react';

describe('<Logout />', () => {
  let props, component;
  beforeEach(() => {
    props = {
      dispatchLogoutUser: jest.fn()
    };
    component = render(<Logout {...props} />);
  });

  it('should render logout component with display text Logout', () => {
    const { getByText } = component;
    const logout = getByText('Logout');
    expect(logout).toBeTruthy();
  });

  it('should call logout on click of LOGOUT button', () => {
    const { getByTestId } = component;

    const logout = getByTestId('logout');
    fireEvent.click(logout, { preventDefault: jest.fn() });
    expect(props.dispatchLogoutUser).toHaveBeenCalledTimes(1);
  });
});
