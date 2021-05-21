import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/login';
import PATH from '../constants/path';

export function Logout({ loading, dispatchLogoutUser, history }) {
  const handleLogout = (e) => {
    e.preventDefault();
    dispatchLogoutUser();
    history?.push(PATH.defaultPath);
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

const mapDispatchToProps = {
  dispatchLogoutUser: logoutUser
};

Logout.propTypes = {
  dispatchLogoutUser: PropTypes.func,
  loading: PropTypes.bool,
  history: PropTypes.object
};

export default connect(null, mapDispatchToProps)(Logout);
