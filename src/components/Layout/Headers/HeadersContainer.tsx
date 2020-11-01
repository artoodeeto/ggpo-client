import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeHeader from './HomeHeader/HomeHeader';
import LoginSignUpHeader from './LoginSignUpHeader/LoginSignUpHeader';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <Switch>
        <Route path="/feed" exact>
          <HomeHeader />
        </Route>
        <Route path="/" exact>
          <LoginSignUpHeader />
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
