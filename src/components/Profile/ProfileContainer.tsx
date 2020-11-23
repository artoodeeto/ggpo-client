import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from 'components/shared/PostForm/PostForm';
import PostContainer from 'components/Post/PostContainer';
import { getUserPosts } from 'store/userProfilePost/Actions';
import { userSelectorUserId } from 'store/user/Selectors';
import { userProfileSelectorPosts } from 'store/userProfilePost/Selectors';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { IPost } from 'interfaces/post';

export interface ProfileContainerProps {
  currentUserId: number;
  posts: IPost[];
  userPosts: (userID: number, offset: number, limit: number) => void;
}

export interface ProfileContainerState {}

class ProfileContainer extends Component<ProfileContainerProps, ProfileContainerState> {
  componentDidMount() {
    this.props.userPosts(this.props.currentUserId, 0, 5);
  }

  render() {
    return (
      <div>
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
    userPosts: (userID: number, offset: number, limit: number) => dispatch(getUserPosts(userID, offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
