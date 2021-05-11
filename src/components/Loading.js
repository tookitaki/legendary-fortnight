import { Spin } from 'antd';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Div>
      {' '}
      <Spin size="large" />
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  color: '#3F516F';
  font-size: 14px;
`;

export default Loading;
