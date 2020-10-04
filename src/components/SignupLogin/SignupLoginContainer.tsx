import React, { Component, Fragment } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ErrorMsg from 'components/shared/ErrorMessage/ErrorMsg';
import { RootState } from 'store/root/root_reducer';
import { hasErrorOnSignupOrLogin, isUserAuthorized } from 'store/session/Selectors';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface SignupLoginContainerProps {
  hasErrors: boolean;
  isAuthenticated: boolean;
}

interface SignupLoginContainerState {}

// background here should show some video, maybe the TI championship games
class SignupLoginContainer extends Component<SignupLoginContainerProps, SignupLoginContainerState> {
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

const mapStateToProps = (state: RootState) => {
  return {
    hasErrors: hasErrorOnSignupOrLogin(state),
    isAuthenticated: isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupLoginContainer);
