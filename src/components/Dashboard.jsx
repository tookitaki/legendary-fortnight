import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getLoginDetails } from '../selectors/login';
import paths from '../utils/path';
import Loading from './Loading';
import Logout from './Logout';

import { AppLayout, } from './AppLayout/';

const Dashboard = ({ loading, isLoggedIn, history }) => {
  useEffect(() => {
    // if (!isLoggedIn) {
    //   history.push(paths.defaultPath);
    // }
  }, [isLoggedIn, history]);

  return (
    <AppLayout>
      <div>
        <Heading isHeading={true}>Hello World</Heading>
        <Loading />
        <h2>By the power of styled-components!</h2>
        <Logout loading={loading} />
      </div>
    </AppLayout>
  );
};

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

function mapStateToProps(state) {
  return {
    login: getLoginDetails(state)
  };
}

export default withRouter(connect(mapStateToProps, null)(Dashboard));
