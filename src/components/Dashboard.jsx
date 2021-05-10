import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

import { logoutUser } from '../actions/login';
import Loading from './Loading';

export class Dashboard extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatchLogoutUser();
    this.setState({
      ...this.state
    });
  };

  componentDidUpdate() {
    const { isLoggedIn, history } = this.props;

    if (!isLoggedIn) {
      history.push('/');
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <Heading isHeading={true}>Hello World</Heading>
        <Loading />
        <h2>By the power of styled-components!</h2>
        <Button
          disabled={loading}
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          onClick={this.handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
}

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

function mapStateToProps(state) {
  const { loading, isLoggedIn, error, auth } = state.login;
  return {
    loading,
    isLoggedIn,
    error,
    auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
