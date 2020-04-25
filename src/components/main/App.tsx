/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import AppStyles from './App.module.scss';
import Login from '../Login/Login';

class App extends React.Component {
  render() {
    return (
      <div className={AppStyles.App}>
        <Login />
      </div>
    );
  }
}

export default App;
