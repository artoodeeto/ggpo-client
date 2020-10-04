import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IPost } from '../../../interfaces/post';
import PostItem from './PostItem/PostItem';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface PostContainerProps {
  posts: IPost[];
  showOptionsBtn: boolean;
}

interface PostContainerState {}

class PostContainer extends Component<PostContainerProps, PostContainerState> {
  render() {
    return (
      <div>
        <h1>The Posts</h1>
        {this.props.posts.map((post: IPost) => (
          <div key={post.id as number}>
            <PostItem post={post} showOptionsBtn={this.props.showOptionsBtn} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
