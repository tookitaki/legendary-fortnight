import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Form, Input, Typography } from 'antd';
import { loginUser, logoutUser } from '../actions/login';
import { withRouter } from 'react-router-dom';
import { getLoginDetails } from '../selectors/loginSelector';

const { Text } = Typography;
const Login = ({ login, dispatchLoginUser, dispatchLogoutUser, history }) => {
  const { loading, isLoggedIn, error } = login;
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const str = `${state.username}:${state.password}`;
    localStorage.setItem('user', state.username);
    dispatchLoginUser(btoa(str));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatchLogoutUser();
  };

  useEffect(() => {
    dispatchLogoutUser();
  }, [dispatchLogoutUser]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, [isLoggedIn, history]);

  const onChange = (key, e) => {
    state[key] = e.target.value;
    setState(state);
  };

  return (
    <div>
      <div style={{ width: '100%' }}>
        <p style={HeaderStyle}>Login</p>
      </div>
      <Card style={LoginCardStyle}>
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Form.Item label="Email">
            <Input
              type="text"
              placeholder="e.g. example@tookitaki.com"
              onChange={(e) => onChange('username', e)}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              type="password"
              placeholder="Must contain 8 characters"
              onChange={(e) => onChange('password', e)}
            />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              onClick={handleSubmit}>
              Login
            </Button>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              onClick={handleLogout}>
              Logout
            </Button>
          </Form.Item>
        </Form>
        {error && (
          <Text type="danger">
            {error.data || error.message || String(error)}
          </Text>
        )}
      </Card>
    </div>
  );
};

const LoginCardStyle = {
  width: '500px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '35px',
  border: '1px solid #D0D7E3',
  borderRadius: '4px',
  padding: '10px'
};

const HeaderStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '15px',
  display: 'block',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  color: '#36465E',
  width: '100%',
  textAlign: 'center'
};

function mapStateToProps(state) {
  return {
    login: getLoginDetails(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginUser: (token) => {
      dispatch(loginUser(token));
    },
    dispatchLogoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

Login.propTypes = {
  dispatchPostLogin: PropTypes.func,
  dispatchResetLogin: PropTypes.func,
  loading: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  error: PropTypes.string,
  history: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
