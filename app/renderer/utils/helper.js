import { ROUTE_PAGE } from '../functionals/Common/constants';

export const isCheckMathLocation = (pathName, key) => {
  if (pathName) {
    return pathName.indexOf(key) !== -1;
  }
  return false;
};
export const createActiveTabMenu = (pathName) => {
  let activePage = '';
  switch (true) {
    case pathName === ROUTE_PAGE.ROUTE_HOME:
      activePage = ROUTE_PAGE.ROUTE_HOME;
      break;
    case pathName === ROUTE_PAGE.ROUTE_CLASSLIST:
      activePage = ROUTE_PAGE.ROUTE_CLASSLIST;
      break;
    case pathName === ROUTE_PAGE.ROUTE_OPEN_SLOT:
      activePage = ROUTE_PAGE.ROUTE_OPEN_SLOT;
      break;
    default:
      activePage = ROUTE_PAGE.ROUTE_HOME;
      break;
  }
  return activePage;
};
