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

  it('should render logout snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  it('should call login on click of LOGIN button', () => {
    const { getByTestId } = component;

    const logout = getByTestId('login');
    fireEvent.click(logout, { preventDefault: jest.fn() });
    expect(props.dispatchLogoutUser).toHaveBeenCalledTimes(1);
  });
});
