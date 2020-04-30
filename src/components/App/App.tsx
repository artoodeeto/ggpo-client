/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import SignupLoginContainer from '../SignupLoginContainer/SignupLogin';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={AppStyles.App}>
          <SignupLoginContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
