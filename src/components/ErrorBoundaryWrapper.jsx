import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import paths from '../utils/path';
import history from '../utils/history';

class ErrorBoundaryWrapper extends PureComponent {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  renderErrorPage = () => {
    this.setState({ hasError: false });
    return history.push(paths.error);
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return <>{hasError ? this.renderErrorPage() : children}</>;
  }
}

ErrorBoundaryWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundaryWrapper;
