import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import * as sessionActions from 'store/session/Actions';
import * as userActions from 'store/user/Actions';
import Cookies from 'js-cookie';
import PostForm from 'components/shared/PostForm/PostForm';
import PostContainer from 'components/shared/Post/PostContainer';
import { getUserPosts } from 'store/userProfilePost/Actions';
import { userSelectorUserId } from 'store/user/Selectors';
import { userProfileSelectorPosts } from 'store/userProfilePost/Selectors';

const Profile: FC = ({ userPosts, currentUserId, clearSession, clearUser, posts }: any) => {
  useEffect(() => {
    userPosts(currentUserId, 0, 5);
  }, [userPosts, currentUserId]);

  const logoutUser = () => {
    clearSession();
    clearUser();
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  };

  return (
    <div>
      <button onClick={logoutUser}>Log out</button>
      <h1>PROFILE</h1>
      <PostForm />
      <PostContainer posts={posts} showOptionsBtn={true} />
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    currentUserId: userSelectorUserId(state),
    posts: userProfileSelectorPosts(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    clearSession: () => dispatch(sessionActions.logoutSession()),
    clearUser: () => dispatch(userActions.logoutUser()),
    userPosts: (userID: number, offset: number, limit: number) => dispatch(getUserPosts(userID, offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
