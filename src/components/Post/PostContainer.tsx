import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import PostItem from './PostItem/PostItem';
import { IPost } from '../../interfaces/post';

interface PostContainerProps {
  posts: IPost[];
  showOptionsBtn: boolean;
}

interface PostContainerState {}

class PostContainer extends Component<PostContainerProps, PostContainerState> {
  render() {
    return (
      <Fragment>
        {this.props.posts.map((post: IPost) => (
          <Fragment key={post.id as number}>
            <PostItem post={post} showOptionsBtn={this.props.showOptionsBtn} />
          </Fragment>
        ))}
      </Fragment>
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
