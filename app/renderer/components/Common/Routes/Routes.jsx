import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import HomePage from '../../../containers/Home/HomeContainer';
import SettingPage from '../../../containers/Setting/SettingContainer';
import OpenSlotPage from '../../../containers/OpenSlot/OpenSlotContainer';
import ProfilePage from '../../../containers/Profile/ProfileContainer';
import VirtualClassRoomPage from '../../../containers/VirtualClassRoom/VirtualClassRoomContainer';

export const ROUTES = [
  {
    label: 'Home',
    icon: 'home',
    pathname: '/',
    component: () => <HomePage />,
  },
  {
    label: 'OpenSlot',
    icon: 'openSlot',
    pathname: '/open-slot',
    component: () => <OpenSlotPage />,
  },
  {
    label: 'Profile',
    icon: 'profile',
    pathname: '/profile',
    component: () => <ProfilePage />,
  },
  {
    label: 'Setting',
    icon: 'setting',
    pathname: '/setting',
    component: () => <SettingPage />,
  },
  {
    label: 'VirtualClassRoom',
    icon: 'virtualClassRoom',
    pathname: '/classroom/:id',
    component: () => <VirtualClassRoomPage />,
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

function Routes() {
  return (
    <Switch>
      {renderRoutes(ROUTES)}
      <Route key="noMatch" component={() => <NoMatch />} />
    </Switch>
  );
}

export default withRouter(Routes);
