import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PATH from '../constants/path';

const NotFoundPage = () => {
  return (
    <Div>
      <Heading>404 Page Not Found</Heading>
      <p>
        Sorry, we cannot find the page you are looking for or you don&apos;t
        currently have the permission to access.
      </p>
      <Link to={PATH.defaultPath}> Go back to homepage </Link>
    </Div>
  );
};
const Div = styled.div`
  text-align: center;
  font-size: 16px;
  color: #31394d;
`;
const Heading = styled.h4`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default NotFoundPage;
