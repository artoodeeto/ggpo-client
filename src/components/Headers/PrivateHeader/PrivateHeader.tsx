/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { logoutSession } from 'store/session/Actions';
// import { logoutUser } from 'store/user/Actions';
// import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faGamepad, faStream, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './PrivateHeader.module.scss';
import DropDownNavLists from '../DropDownNavLists/DropDownNavLists';

type PrivateHeaderProps = {};

// TODO: Fix em

const PrivateHeader: FC<PrivateHeaderProps> = () => {
  // const dispatch = useDispatch();
  // const logOutCurrentUser = () => {
  //   dispatch(logoutSession());
  //   dispatch(logoutUser());
  //   Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  // };

  return (
    <nav className={styles.PrivateHeaderNav}>
      <ul>
        <li>
          <h5>LOGO</h5>
        </li>

        <ul className={styles.MainNavContainer}>
          <li>
            <NavLink activeClassName={styles.NavLink__active} to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.NavLink__active} to="/game_groups">
              <FontAwesomeIcon icon={faGamepad} />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.NavLink__active} to="/feed">
              <FontAwesomeIcon icon={faStream} />
            </NavLink>
          </li>
          <li className={styles.DropDownContainer}>
            <FontAwesomeIcon icon={faEllipsisV} />
            <DropDownNavLists />
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default PrivateHeader;
