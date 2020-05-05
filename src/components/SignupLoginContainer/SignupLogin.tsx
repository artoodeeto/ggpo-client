import React, { Component, Fragment } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

// background here should show some video, maybe the TI championship games
class SignupLoginContainer extends Component {
  render() {
    return (
      <Fragment>
        <Signup />
        <Login />
      </Fragment>
    );
  }
}

export default SignupLoginContainer;
