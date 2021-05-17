import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import paths from '../utils/path';
import history from '../utils/history';

class ErrorBoundaryWrapper extends PureComponent {
  static getDerivedStateFromError() {
    history.push(paths.error);
  }

  componentDidCatch() {
    history.push(paths.error);
  }

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

ErrorBoundaryWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundaryWrapper;
