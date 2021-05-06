import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Form, Input, Typography} from 'antd';
import { loginUser, logoutUser } from '../actions/login';

const {Text} = Typography;
const LoginCardStyle = {
  width: '500px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '35px',
  border: '1px solid #D0D7E3',
  borderRadius: '4px',
  padding: '10px',
};

const LogoStyle = {
  width: '123px',
  height: '107px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
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
  textAlign: 'center',
};

const CardTitleStyle = {
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '16px',
  color: '#212121',
  textAlign: 'center'
};

export class Login extends React.Component {
  state = {
    username: null,
    password: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    const str = `${username}:${password}`;
    localStorage.setItem("user", username);
    this.props.dispatchLoginUser(btoa(str));
    this.setState({
      ...this.state,
    });
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatchLogoutUser();
    this.setState({
      ...this.state,
    });
  };

  onChange = (key) => {
    return (e) => {
      let state = this.state;
      state[key] = e.target.value;
      this.setState(state);
    };
  };

  componentDidMount() {
    this.props.dispatchLogoutUser();
  }

  render() {
    const {loading, error} = this.props;

    return(
    <div>
      <div style={{width: '100%'}}>
        <p style={HeaderStyle}>Login</p>
      </div>
      <Card style={LoginCardStyle}>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item label="Email">
            <Input type='text' placeholder="e.g. example@tookitaki.com"
                   onChange={this.onChange('username')}/>
          </Form.Item>
          <Form.Item label="Password">
            <Input type='password' placeholder="Must contain 8 characters"
                   onChange={this.onChange('password')}/>
          </Form.Item>
          <Form.Item style={{textAlign: 'center'}}>
            <Button disabled={loading} type="primary" htmlType="submit"
              loading={loading} block onClick={this.handleSubmit}>
                Login
            </Button>
            <Button disabled={loading} type="primary" htmlType="submit"
              loading={loading} block onClick={this.handleLogout}>
                Logout
            </Button>
          </Form.Item>
        </Form>
        {error && (<Text type="danger">{error.data ?
            error.data :
            error.message ? error.message : String(error)}</Text>)
        }
      </Card>
    </div>
    );
  }
}

function mapStateToProps(state) {
  const {loading, error, auth} = state.login;
  return {
    loading,
    error,
    auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginUser: (token) => {
      dispatch(loginUser(token));
    },
    dispatchLogoutUser: () => {
      dispatch(logoutUser());
    },
  };
}

Login.propTypes = {
  dispatchPostLogin: PropTypes.func,
  dispatchResetLogin: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  auth: PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
