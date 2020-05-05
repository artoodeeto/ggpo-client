import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as userSelectors from '../../models/User/selectors';
import { connect } from 'react-redux';
import { State } from '../../interfaces/stateInterface';

const Private = (props: any) => {
  const { isAuthenticated, component: Component, path } = props;
  return (
    <Route
      render={({ location }) => {
        console.log(isAuthenticated);
        return isAuthenticated ? (
          <Component path={path} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state: State) => {
  return {
    isAuthenticated: userSelectors.isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Private);
