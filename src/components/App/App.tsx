/* eslint-disable react/prefer-stateless-function */
import React, { Component, Suspense } from 'react';
import AppStyles from './App.module.scss';
import MainRoute from 'routes/main.router';
import { connect } from 'react-redux';
import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';
import routeConfig from 'routes/routes.config';
import { AnyAction } from 'redux';
import { RootState } from 'store/root/root_reducer';
import { ThunkDispatch } from 'redux-thunk';

interface AppProps {
  isAuth: boolean;
  expectedTokenExp: number;
  toAutoLogout: (timer: number) => void;
}

interface AppState {}

class App extends Component<AppProps, AppState> {
  componentDidMount() {
    if (this.props.isAuth) {
      this.props.toAutoLogout(Number(this.props.expectedTokenExp - Date.now()));
    }
  }

  render() {
    return (
      <div className={AppStyles.App}>
        <Suspense fallback={<div>create loading here</div>}>
          <MainRoute routeConf={routeConfig} />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    expectedTokenExp: state.session.expectedTokenExpirationInMillisec,
    isAuth: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    toAutoLogout: (timer: number) => autoLogoutAfterTokenExpire(dispatch, timer)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
