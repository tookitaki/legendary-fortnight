import { Spin } from 'antd';
import styled from 'styled-components/macro';

const Loading = ({ className }) => {
  return <StyledSpin className={className} size="large" />;
};

const StyledSpin = styled(Spin)`
  &&& {
    position: fixed;
    top: 0;
    left: 50%;
    color: #af156c;
    font-size: 14px;
  }
`;

export default Loading;
