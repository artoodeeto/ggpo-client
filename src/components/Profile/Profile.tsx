import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import * as sessionActions from 'store/session/Actions';
import * as userActions from 'store/user/Actions';
import Cookies from 'js-cookie';
import PostForm from 'components/shared/PostForm/PostForm';

const Profile: FC = (props: any) => {
  useEffect(() => {
    console.log('PROFILE');
  });

  const logoutUser = () => {
    props.clearSession();
    props.clearUser();
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  };

  return (
    <div>
      <button onClick={logoutUser}>Log out</button>
      <h1>PROFILE</h1>
      <PostForm />
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    clearSession: () => dispatch(sessionActions.logoutSession()),
    clearUser: () => dispatch(userActions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
