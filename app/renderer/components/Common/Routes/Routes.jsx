import * as React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import HomeContainer from '../../../containers/Home/HomeContainer';
import ClassListContainer from '../../../containers/ClassList/ClassListContainer';
import SettingContainer from '../../../containers/Setting/SettingContainer';
import OpenSlotContainer from '../../../containers/OpenSlot/OpenSlotContainer';
import ProfileContainer from '../../../containers/Profile/ProfileContainer';
import VirtualClassRoomContainer from '../../../containers/VirtualClassRoom/VirtualClassRoomContainer';
import { ROUTE_PAGE } from '../../../functionals/Common/constants';

const HomePage = withRouter(HomeContainer);
const ClassListPage = withRouter(ClassListContainer);
const SettingPage = withRouter(SettingContainer);
const OpenSlotPage = withRouter(OpenSlotContainer);
const ProfilePage = withRouter(ProfileContainer);
const VirtualClassRoomPage = withRouter(VirtualClassRoomContainer);
export const ROUTES = [
  {
    label: 'Home',
    icon: 'home',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_HOME,
    component: () => <HomePage />,
  },
  {
    label: 'classList',
    icon: 'classList',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_CLASSLIST,
    component: () => <ClassListPage />,
  },
  {
    label: 'OpenSlot',
    icon: 'openSlot',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_OPEN_SLOT,
    component: () => <OpenSlotPage />,
  },
  {
    label: 'Profile',
    icon: 'profile',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_PROFILE,
    component: () => <ProfilePage />,
  },
  {
    label: 'Setting',
    icon: 'setting',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_SETTING,
    component: () => <SettingPage />,
  },
  {
    label: 'VirtualClassRoom',
    icon: 'virtualClassRoom',
    exact: false,
    pathname: ROUTE_PAGE.ROUTE_VIRTUALCLASSROOM,
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
        exact={route.exact}
        component={route.component}
      />
    );
  });

function Routes() {
  return (
    <Switch>
      {renderRoutes(ROUTES)}
      <Route key="noMatch" component={() => <NoMatch />} />
      <Redirect from="/" to="/" />
    </Switch>
  );
}

export default Routes;
