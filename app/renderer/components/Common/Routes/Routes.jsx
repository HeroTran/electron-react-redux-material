import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

const NoMatch = React.lazy(() => import('../NoMatch/NoMatch'));
const HomePage = React.lazy(() =>
  import('../../../containers/Home/HomeContainer')
);

export const ROUTES = [
  {
    label: 'Home',
    icon: 'home',
    pathname: '/',
    component: () => <HomePage />,
  },
];

export const renderRoutes = (routes) =>
  routes.map((route) => {
    if (route.children) {
      return renderRoutes(route.children);
    }
    return (
      <Route
        key={route.pathname}
        path={route.pathname}
        exact
        component={route.component}
      />
    );
  });

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        {renderRoutes(ROUTES)}
        <Route key="noMatch" component={() => <NoMatch />} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
