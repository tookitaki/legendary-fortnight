import styled from 'styled-components/macro';
import {
  layout,
  color,
  space,
  typography,
  flexbox,
  background,
  border,
  position
} from 'styled-system';

const Box = styled.div`
  ${layout}
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${background}
  ${border}
  ${position}
`;

export default Box;
