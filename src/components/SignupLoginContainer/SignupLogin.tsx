import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

// background here should show some video something
class SignupLoginContainer extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default SignupLoginContainer;
