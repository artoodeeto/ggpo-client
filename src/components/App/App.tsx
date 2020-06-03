/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import MainRoute from 'routes/main.router';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import * as sessionActions from 'store/session/Actions';
import * as userActions from 'store/user/Actions';

class App extends Component<any> {
  render() {
    if (this.props.isAuth) {
      let q = 1;
      setInterval(() => console.log(q++), 1000);
      setTimeout(() => {
        console.log('app out');
        this.props.removeSession();
        this.props.logOutUser();
      }, this.props.expectedTokenExp - Date.now());
      console.log(Date.now(), 'app', this.props.expectedTokenExp, this.props.expectedTokenExp - Date.now());
    }
    return (
      <div className={AppStyles.App}>
        <MainRoute />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    expectedTokenExp: state.session.expectedTokenExpirationInMillisec,
    isAuth: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    removeSession: () => dispatch(sessionActions.logoutSession()),
    logOutUser: () => dispatch(userActions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
