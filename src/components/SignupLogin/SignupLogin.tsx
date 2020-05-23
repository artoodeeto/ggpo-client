import React, { Component, Fragment } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { connect } from 'react-redux';
import { State } from 'interfaces/stateInterface';
import * as sessionSelectors from 'store/session/Selectors';
import { Redirect } from 'react-router-dom';
import ErrorMsg from 'components/shared/ErrorMsg';

// background here should show some video, maybe the TI championship games
class SignupLoginContainer extends Component<any> {
  render() {
    return (
      <Fragment>
        {this.props.hasErrors ? (
          <div>
            <ErrorMsg />
          </div>
        ) : (
          ''
        )}

        {this.props.isAuthenticated ? (
          <Redirect to="/feed" />
        ) : (
          <Fragment>
            <Signup />
            <Login />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    hasErrors: sessionSelectors.hasErrorOnSignupOrLogin(state),
    isAuthenticated: sessionSelectors.isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupLoginContainer);
