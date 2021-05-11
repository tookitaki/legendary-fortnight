import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/login';

function Logout({ loading, dispatchLogoutUser }) {
  const handleLogout = (e) => {
    e.preventDefault();
    dispatchLogoutUser();
  };

  return (
    <Button
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

Logout.propTypes = {
  dispatchLogoutUser: PropTypes.func,
  loading: PropTypes.bool
};

export default connect(null, mapDispatchToProps)(Logout);
