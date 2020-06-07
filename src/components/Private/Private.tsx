import React, { FC, ReactElement, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as sessionSelectors from 'store/session/Selectors';
import { connect } from 'react-redux';
import { IState } from '../../interfaces/stateInterface';

const Private: FC<any> = (props: any): ReactElement => {
  const { isAuthenticated, component: Component, path } = props;
  return (
    <Route
      render={({ location }) => {
        return isAuthenticated ? (
          <Suspense fallback={<div>create loading here</div>}>
            <Component path={path} />
          </Suspense>
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

const mapStateToProps = (state: IState) => {
  return {
    isAuthenticated: sessionSelectors.isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Private);
