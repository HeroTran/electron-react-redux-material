import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Common/PrivateRoute/PrivateRoute';
import { LoginContainer, AppContainer } from './containers';
import { ROUTE_PAGE } from './functionals/Common/constants';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTE_PAGE.ROUTE_LOGIN} component={LoginContainer} />
        <PrivateRoute path={ROUTE_PAGE.ROUTE_HOME} component={AppContainer} />
      </Switch>
    </HashRouter>
  );
};
export default App;
