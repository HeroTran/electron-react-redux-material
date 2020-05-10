import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../../i18n';
import { getCurrentUser } from '../../../utils/localStoreHelper';
import { ROUTE_PAGE } from '../../../functionals/Common/constants';
import avarta from '../../../../public/img/avatar.png';
import './header.scss';

const Header = (props) => {
  const { history, activeMenu, handleSignOut } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const wrapperRef = useRef(null);
  const currentUser = getCurrentUser();
  console.log('activeMenu', activeMenu);
  const handleClickOpenMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      event.target.parentNode.className.indexOf('ul-setting') === -1 &&
      event.target.parentNode.className.indexOf('each-menu-setting') === -1
    ) {
      setOpenMenu(false);
    }
  };
  const handleClickSignOut = useCallback(() => {
    handleSignOut();
    history.push(ROUTE_PAGE.ROUTE_LOGIN);
  }, []);
  return (
    <div className="wrapper-header">
      <div className="group-menu">
        <ul>
          <li>
            <Link to={ROUTE_PAGE.ROUTE_HOME}>
              <i className="icon-home" />
              <span>{i18n.t('header.home')}</span>
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PAGE.ROUTE_CLASSLIST}>
              <i className="icon-classlist" />
              <span>{i18n.t('header.classList')}</span>
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PAGE.ROUTE_OPEN_SLOT}>
              <i className="icon-openslot" />
              <span>{i18n.t('header.openSlot')}</span>
            </Link>
          </li>
          <li>
            <Link to="/classroom/a564c148-e480-4f92-aa7a-6cd9b7b19ae6">
              <i className="icon-openslot" />
              <span>vitual</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="group-user">
        <div className="info-user">
          <img
            className="user-img"
            src={currentUser.avatar_url ? currentUser.avatar_url : avarta}
            alt="avatar"
          />
          <p className="user-name">{currentUser.username}</p>
        </div>
        <i
          onClick={() => handleClickOpenMenu()}
          className="user-arrow"
          ref={wrapperRef}
        />
        <div
          className={`user-setting animated ${
            openMenu ? `show-menu` : `hide-menu`
          }`}
        >
          <ul className="ul-setting">
            <li className="each-info each-menu-setting">
              <img
                src={currentUser.avatar_url ? currentUser.avatar_url : avarta}
                alt="avatar"
              />
              <p>{currentUser.username}</p>
            </li>
            <li className="each-setting each-menu-setting">
              <i />
              <p>{i18n.t('userSettings.settings')}</p>
            </li>
            <li
              className="each-signout each-menu-setting"
              onClick={() => handleClickSignOut()}
            >
              <i />
              <p>{i18n.t('userSettings.signOut')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
