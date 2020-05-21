import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { State } from 'interfaces/stateInterface';
import * as sessionActions from 'store/session/Actions';
import * as userActions from 'store/user/Actions';

const Profile: FC = (props: any) => {
  useEffect(() => {
    console.log('PROFILE');
  });

  const logoutUser = () => {
    props.clearSession();
    props.clearUser();
  };

  return (
    <div>
      <button onClick={logoutUser}>Log out</button>
      <h1>PROFILE</h1>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    clearSession: () => dispatch(sessionActions.logoutSession()),
    clearUser: () => dispatch(userActions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
