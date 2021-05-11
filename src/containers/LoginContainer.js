import { connect } from 'react-redux';
import { loginUser } from '../actions/login';
import Login from '../components/Login';
import { getLoginDetails } from '../selectors/loginSelector';

export const mapStateToProps = (state) => {
  return {
    login: getLoginDetails(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (payload) => {
      dispatch(loginUser(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
