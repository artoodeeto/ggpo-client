import React, { FC, ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as sessionSelectors from 'store/session/Selectors';
import { connect } from 'react-redux';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import PrivateLayout from 'components/Layout/PrivateLayout/PrivateLayout';

const Private: FC<any> = (props: any): ReactElement => {
  const { isAuthenticated, component: Component, path } = props;

  return (
    <Route
      path={path}
      render={({ location }) => {
        return isAuthenticated ? (
          <PrivateLayout>
            <Component />
          </PrivateLayout>
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

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: sessionSelectors.isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Private);
