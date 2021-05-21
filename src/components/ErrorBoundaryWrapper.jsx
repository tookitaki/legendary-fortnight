import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PATH from '../constants/path';
import history from '../utils/history';

class ErrorBoundaryWrapper extends PureComponent {
  componentDidCatch() {
    history.push(PATH.error);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ErrorBoundaryWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundaryWrapper;
