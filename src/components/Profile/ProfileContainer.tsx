import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import PostForm from 'components/shared/PostForm/PostForm';
import PostContainer from 'components/Post/PostContainer';
import { getUserPosts } from 'store/userProfilePost/Actions';
import { userSelectorUserId } from 'store/user/Selectors';
import { userProfileSelectorPosts } from 'store/userProfilePost/Selectors';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { IPost } from 'interfaces/post';
import { logoutSession } from 'store/session/Actions';
import { logoutUser } from 'store/user/Actions';

export interface ProfileContainerProps {
  currentUserId: number;
  posts: IPost[];
  clearSession: () => void;
  clearUser: () => void;
  userPosts: (userID: number, offset: number, limit: number) => void;
}

export interface ProfileContainerState {}

class ProfileContainer extends Component<ProfileContainerProps, ProfileContainerState> {
  componentDidMount() {
    this.props.userPosts(this.props.currentUserId, 0, 5);
  }

  logOutCurrentUser() {
    this.props.clearSession();
    this.props.clearUser();
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.logOutCurrentUser()}>
          Log out
        </button>
        <h1>PROFILE</h1>
        <PostForm />
        <PostContainer posts={this.props.posts} showOptionsBtn />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentUserId: userSelectorUserId(state),
    posts: userProfileSelectorPosts(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    clearSession: () => dispatch(logoutSession()),
    clearUser: () => dispatch(logoutUser()),
    userPosts: (userID: number, offset: number, limit: number) => dispatch(getUserPosts(userID, offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
