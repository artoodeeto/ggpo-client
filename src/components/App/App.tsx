/* eslint-disable react/prefer-stateless-function */
import React, { Component, JSXElementConstructor } from 'react';
import { connect } from 'react-redux';
import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';
import { AnyAction } from 'redux';
import { RootState } from 'store/root/root_reducer';
import { ThunkDispatch } from 'redux-thunk';
import { LayoutContainer } from 'components/Layout/LayoutContainer';

interface AppProps {
  isAuth: boolean;
  expectedTokenExp: number;
  toAutoLogout: (timer: number) => void;
}

interface AppState {}

class App extends Component<AppProps, AppState> {
  componentDidMount(): void {
    if (this.props.isAuth) {
      this.props.toAutoLogout(Number(this.props.expectedTokenExp - Date.now()));
    }
  }

  render() {
    return <LayoutContainer />;
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
