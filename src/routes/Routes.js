import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Loading from '../components/Loader';
import Login from '../components/Login';
import ErrorBoundaryWrapper from '../components/ErrorBoundaryWrapper';
import { isAuthenticated } from '../utils/TokenHandler';
import paths from '../utils/path';
import NotFoundPage from '../components/NotFoundPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <ErrorBoundaryWrapper>
    <Route
      {...rest}
      render={props =>
        (isAuthenticated) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: paths.defaultPath,
              state: {
                redirectTo: paths.dashboard,
              },
            }}
          />
        )
      }
    />
  </ErrorBoundaryWrapper>
);

const Routes = () => {
  const { defaultPath, dashboard, error } = paths;
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={defaultPath} component={Login} />
        <PrivateRoute exact path={dashboard} component={Dashboard} />
        <Route exact path={error} component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;