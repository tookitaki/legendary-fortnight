import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/login';

export function Logout({ loading, dispatchLogoutUser }) {
  const handleLogout = (e) => {
    e.preventDefault();
    dispatchLogoutUser();
  };

  return (
    <Button
      id="logout"
      data-testid="logout"
      disabled={loading}
      type="primary"
      htmlType="submit"
      loading={loading}
      block
      onClick={handleLogout}>
      Logout
    </Button>
  );
}

const mapDispatchToProps2 = {
  dispatchLogoutUser: () => logoutUser()
};

Logout.propTypes = {
  dispatchLogoutUser: PropTypes.func,
  loading: PropTypes.bool
};

export default connect(null, mapDispatchToProps2)(Logout);
