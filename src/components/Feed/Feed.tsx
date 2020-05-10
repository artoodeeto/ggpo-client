import React, { useEffect, FC } from 'react';
import { State } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import * as sessionSelectors from 'store/session/Selectors';
import { useHistory } from 'react-router-dom';

const Feed: FC = (props: any) => {
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
    isAuthenticated: sessionSelectors.isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
