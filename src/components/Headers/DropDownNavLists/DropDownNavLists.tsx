/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { faCog, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { logMeOut } from 'store/session/Actions';

type DropDownNavListsProps = {};

const DropDownNavLists: FC<DropDownNavListsProps> = () => {
  const dispatch = useDispatch();

  return (
    <ul>
      <li aria-roledescription="settings button" role="button">
        <FontAwesomeIcon icon={faCog} />
        <span>Settings</span>
      </li>
      <li aria-roledescription="search button" role="button">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </li>
      <li aria-roledescription="logout button" role="button" onClick={() => dispatch(logMeOut())}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </li>
    </ul>
  );
};

export default DropDownNavLists;
