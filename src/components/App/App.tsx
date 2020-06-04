/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import MainRoute from 'routes/main.router';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import * as sessionActions from 'store/session/Actions';
import * as userActions from 'store/user/Actions';
import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';

class App extends Component<any> {
  componentDidMount() {
    console.log('app mounted', this.props.isAuth);
    if (this.props.isAuth) {
      this.props.toAutoLogout(Number(this.props.expectedTokenExp - Date.now()));
    }
  }

  render() {
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
    logOutUser: () => dispatch(userActions.logoutUser()),
    toAutoLogout: (timer: number) => autoLogoutAfterTokenExpire(dispatch, timer)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
