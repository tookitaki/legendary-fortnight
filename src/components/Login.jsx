import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, Input, Typography } from 'antd';
import { connect } from 'react-redux';
import { loginUser } from '../actions/login';
import { getLoginDetails } from '../selectors/login';
import Logout from './Logout';
import paths from '../constants/path';

const { Text } = Typography;
export const Login = ({ login, dispatchLoginUser, history }) => {
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

  useEffect(() => {
    if (isLoggedIn) {
      history.push(paths.dashboard);
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
              id="username"
              data-testid="username"
              type="text"
              placeholder="e.g. example@tookitaki.com"
              onChange={(e) => onChange('username', e)}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              id="password"
              data-testid="password"
              type="password"
              placeholder="Must contain 8 characters"
              onChange={(e) => onChange('password', e)}
            />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              id="login"
              data-testid="login"
              disabled={loading}
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              onClick={handleSubmit}>
              Login
            </Button>
            <Logout loading={loading} />
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

Login.propTypes = {
  dispatchLoginUser: PropTypes.func,
  login: PropTypes.shape({
    loading: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string
  }),
  history: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    login: getLoginDetails(state)
  };
};

const mapDispatchToProps = {
  dispatchLoginUser: loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
