import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Loading from '../components/Loading';
import ErrorBoundaryWrapper from '../components/ErrorBoundaryWrapper';
import { isAuthenticated } from '../utils/TokenHandler';
import paths from '../utils/path';
import NotFoundPage from '../components/NotFoundPage';
import LoginContainer from '../containers/LoginContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <ErrorBoundaryWrapper>
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  </ErrorBoundaryWrapper>
);

const Routes = () => {
  const { defaultPath, dashboard, error } = paths;
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={defaultPath} component={LoginContainer} />
        <PrivateRoute exact path={dashboard} component={Dashboard} />
        <Route exact path={error} component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
