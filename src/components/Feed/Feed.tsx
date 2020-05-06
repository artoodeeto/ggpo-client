import React, { useEffect } from 'react';
import { State } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import * as userSelectors from '../../models/User/selectors';
import { useHistory } from 'react-router-dom';

const Feed = (props: any) => {
  const history = useHistory();
  const onTest = () => {
    history.push('/profile');
  };

  useEffect(() => {
    console.log(props.isAuthenticated);
  });

  return (
    <div>
      <button onClick={onTest}>Profile</button>
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
