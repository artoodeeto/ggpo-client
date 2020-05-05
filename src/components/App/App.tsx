/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import SignupLoginContainer from '../SignupLoginContainer/SignupLogin';
import { Route, Switch } from 'react-router-dom';
import Feed from 'components/Feed/Feed';
import Profile from 'components/Profile/Profile';
import Private from 'components/Private/Private';

class App extends Component {
  render() {
    return (
      <div className={AppStyles.App}>
        <Switch>
          <Route path="/" exact>
            <SignupLoginContainer />
          </Route>
          <Private path="/profile" component={Profile} />
          <Private path="/feed" component={Feed} />
          <Route path="/not-found" render={() => <h1>NOT FOUND</h1>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
