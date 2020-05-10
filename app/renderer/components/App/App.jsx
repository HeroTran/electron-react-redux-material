import React, { useState, useEffect, useMemo } from 'react';
import Routes from '../Common/Routes/Routes';
import Header from '../Common/Header/Header';
import { ROUTE_PAGE } from '../../functionals/Common/constants';
import { isCheckMathLocation, createActiveTabMenu } from '../../utils/helper';

import './app.scss';

const App = (props) => {
  const {
    isLoading,
    isAuthentication401,
    history,
    location,
    handleSignOut,
  } = props;
  const [showMenu, setShowMenu] = useState(true);
  const [activeMenu, setActiveMenu] = useState(ROUTE_PAGE.ROUTE_HOME);

  useEffect(() => {
    const isShowHeader = isCheckMathLocation(
      location.pathname,
      ROUTE_PAGE.ROUTE_CLASSROOM
    );
    setShowMenu(!isShowHeader);
    if (!isShowHeader) {
      const activeMenu = createActiveTabMenu(location.pathname);
      setActiveMenu(activeMenu);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (isAuthentication401) {
      handleSignOut();
      history.push(ROUTE_PAGE.ROUTE_LOGIN);
    }
  }, [isAuthentication401]);

  const createHeaderElement = useMemo(() => {
    return (
      <Header
        history={history}
        activeMenu={activeMenu}
        handleSignOut={handleSignOut}
      />
    );
  }, [activeMenu]);
  return (
    <>
      <div className={`page-wrapper ${!showMenu ? `full-screen` : ''}`}>
        {showMenu && (
          <div className="header-container">{createHeaderElement}</div>
        )}
        <div className="main-container">
          {isLoading && (
            <div className="wrapper-loading">
              <div className="loading loading-page" />
            </div>
          )}
          <div className="wrapper-page scrollbar">
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
