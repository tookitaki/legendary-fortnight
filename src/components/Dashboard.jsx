import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { layout, color, space } from 'styled-system';
import { getLoginDetails } from '../selectors/login';
import paths from '../utils/path';
import Loading from './Loading';
import Logout from './Logout';

const Dashboard = ({ login, history }) => {
  const { loading, isLoggedIn } = login;
  useEffect(() => {
    if (!isLoggedIn) {
      history.push(paths.defaultPath);
    }
  }, [isLoggedIn, history]);

  return (
    <div>
      <Heading p="5px" color="persianGreen" isHeading={true}>
        Hello World
      </Heading>
      <Loading />
      <Heading m="10px" color="lightBlue" bg="persianGreen">
        By the power of styled-components!
      </Heading>
      <Logout loading={loading} />
    </div>
  );
};

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  ${layout}
  ${color}
  ${space}
`;

function mapStateToProps(state) {
  return {
    login: getLoginDetails(state)
  };
}

export default withRouter(connect(mapStateToProps, null)(Dashboard));
