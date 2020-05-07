/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AppStyles from './App.module.scss';
import MainRoute from 'routes/main.router';

class App extends Component {
  render() {
    return (
      <div className={AppStyles.App}>
        <MainRoute />
      </div>
    );
  }
}

export default App;
