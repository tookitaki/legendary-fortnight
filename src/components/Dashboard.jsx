import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

const Dashboard = () => {
  return (
    <div>
      <Heading isHeading>Hello World</Heading>
      <h2>By the power of styled-components!</h2>
    </div>
  );
};

export default Dashboard;
