import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutSession } from 'store/session/Actions';
import { logoutUser } from 'store/user/Actions';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSignOutAlt, faStream, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './PrivateHeader.module.scss';

type PrivateHeaderProps = {};

const PrivateHeader: FC<PrivateHeaderProps> = () => {
  const dispatch = useDispatch();
  const logOutCurrentUser = () => {
    dispatch(logoutSession());
    dispatch(logoutUser());
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  };

  return (
    <nav className={styles.PrivateHeaderNav}>
      <ul>
        <li>
          <h5>LOGO</h5>
        </li>
        <div className={styles.MainNavContainer}>
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
        </div>
        <li>
          <button type="button" onClick={() => logOutCurrentUser()}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PrivateHeader;
