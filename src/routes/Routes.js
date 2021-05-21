import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Loading from '../components/Loading';
import ErrorBoundaryWrapper from '../components/ErrorBoundaryWrapper';
import NotFoundPage from '../components/NotFoundPage';
import Login from '../components/Login';
import PATH from '../constants/path';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <ErrorBoundaryWrapper>
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to={PATH.defaultPath} />;
        }
      }}
    />
  </ErrorBoundaryWrapper>
);

const Routes = () => {
  const { defaultPath, dashboard, error } = PATH;
  const { isLoggedIn } = useSelector((state) => state.login);
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={defaultPath} component={Login} />
        <PrivateRoute
          exact
          path={dashboard}
          isLoggedIn={isLoggedIn}
          component={Dashboard}
        />
        <Route exact path={error} component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
