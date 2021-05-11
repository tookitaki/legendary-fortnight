import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading';
import Logout from './Logout';

const Dashboard = ({ loading, isLoggedIn, history }) => {
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  return (
    <div>
      <Heading isHeading={true}>Hello World</Heading>
      <Loading />
      <h2>By the power of styled-components!</h2>
      <Logout loading={loading} />
    </div>
  );
};

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

function mapStateToProps(state) {
  const { loading, isLoggedIn, error } = state.login;
  return {
    loading,
    isLoggedIn,
    error
  };
}

export default withRouter(connect(mapStateToProps, null)(Dashboard));
