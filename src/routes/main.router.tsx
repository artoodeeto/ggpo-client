import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from 'components/Private/Private';
import SignupLoginContainer from 'components/SignupLoginContainer/SignupLogin';
import Profile from 'components/Profile/Profile';
import Feed from 'components/Feed/Feed';

const MainRoute = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SignupLoginContainer />
      </Route>
      <Private path="/profile" component={Profile} />
      <Private path="/feed" component={Feed} />
      <Route path="/not-found" render={() => <h1>NOT FOUND</h1>}></Route>
    </Switch>
  );
};

export default MainRoute;
