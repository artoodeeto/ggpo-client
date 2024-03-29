import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import ErrorMsg from 'components/shared/ErrorMessage/ErrorMsg';
import { RootState } from 'store/root/root_reducer';
import { hasErrorOnSignupOrLogin, isUserAuthorized } from 'store/session/Selectors';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// import { Signup } from './Signup/Signup';
// import { Login } from './Login/Login';
import styles from './SignupLoginContainer.module.scss';
import { FbBtn } from '../Auth/Facebook/FB_btn';
// import { LoginSignupSliderButton } from './LoginSignupSliderButton/LoginSignupSliderButton';

interface SignupLoginContainerProps {
  hasErrors: boolean;
  isAuthenticated: boolean;
}

interface SignupLoginContainerState {
  toLoginOrSignup: boolean;
}

export class SignupLoginContainer extends Component<SignupLoginContainerProps, SignupLoginContainerState> {
  // constructor(props: SignupLoginContainerProps) {
  //   super(props);
  //   this.state = {
  //     toLoginOrSignup: true
  //   };
  // }

  // toLogInOrSignUp(toShow: boolean): void {
  //   this.setState({ toLoginOrSignup: toShow });
  // }

  render() {
    return (
      <Fragment>
        {this.props.hasErrors ? <div>{/* <ErrorMsg /> */}</div> : null}

        {this.props.isAuthenticated ? (
          <Redirect to="/feed" />
        ) : (
          <div className={styles.SignupLoginContainer}>
            {/* <Login isLoggingInOrSigningUp={true} />
            <span>or</span>
            <Signup isLoggingInOrSigningUp={false} /> */}
            <FbBtn />
          </div>
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
