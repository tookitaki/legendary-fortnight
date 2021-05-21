import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, Input, Typography } from 'antd';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { loginUser } from '../actions/login';
import { getLoginDetails } from '../selectors/login';
import Logout from './Logout';
import PATH from '../constants/path';
import { setItemToLocalStorage } from '../utils/general';

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
    setItemToLocalStorage('user', state.username);
    dispatchLoginUser(btoa(str));
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push(PATH.dashboard);
    }
  }, [isLoggedIn, history]);

  const onChange = (key, e) => {
    state[key] = e.target.value;
    setState(state);
  };

  return (
    <div>
      <Div>
        <P>Login</P>
      </Div>
      <StyledCard>
        <Form layout="vertical">
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
          <FormItem>
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
          </FormItem>
        </Form>
        {error && (
          <Text type="danger">
            {error.data || error.message || String(error)}
          </Text>
        )}
      </StyledCard>
    </div>
  );
};

const Div = styled.div`
  width: '100%';
`;

const P = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  display: block;
  font-weight: 600;
  font-size: 16px;
  color: #36465e;
  width: '100%';
  text-align: center;
`;

const StyledCard = styled(Card)`
  &&& {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    border: 1px solid #d0d7e3;
    border-radius: 4px;
    padding: 10px;
  }
`;

const FormItem = styled(Form.Item)`
  &&& {
    text-align: center;
    width: '50px';
  }
`;

Login.propTypes = {
  dispatchLoginUser: PropTypes.func,
  login: PropTypes.shape({
    loading: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string
  }),
  history: PropTypes.object
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
