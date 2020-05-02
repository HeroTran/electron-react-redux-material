import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
// import { Authenticated, SpinnerLoading } from './components';
import LoginContainer from './containers/LoginRegister/LoginContainer';
import AppContainer from './containers/App/AppContainer';

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/" exact component={AppContainer} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  );
}
export default App;
