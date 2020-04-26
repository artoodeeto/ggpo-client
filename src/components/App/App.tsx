/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import SignupLoginContainer from '../SignupLoginContainer/SignupLogin';

class App extends Component {
  render() {
    return (
      <div className={AppStyles.App}>
        <SignupLoginContainer />
      </div>
    );
  }
}

export default App;
