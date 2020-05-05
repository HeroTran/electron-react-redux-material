import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
// import Authenticated from './components';
import { withTranslation } from 'react-i18next';
import LoginContainer from './containers/LoginRegister/LoginContainer';
import ForgotPasswordContainer from './containers/LoginRegister/ForgotPasswordContainer';
import AppContainer from './containers/App/AppContainer';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/forgot-password" component={ForgotPasswordContainer} />
        <Route path="/" component={AppContainer} />
      </Switch>
    </HashRouter>
  );
}
export default withTranslation()(App);
