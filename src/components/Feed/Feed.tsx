import React, { useEffect } from 'react';
import { State } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import * as userSelectors from '../../models/User/selectors';

const Feed = (props: any) => {
  useEffect(() => {
    console.log(props.isAuthenticated);
  });

  return (
    <div>
      <h1>I am FEED TEST!</h1>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
