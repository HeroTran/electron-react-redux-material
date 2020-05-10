import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isCheckAuth } from '../../../utils/localStoreHelper';
import { ROUTE_PAGE } from '../../../functionals/Common/constants';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = isCheckAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTE_PAGE.ROUTE_LOGIN} />
        )
      }
    />
  );
}
