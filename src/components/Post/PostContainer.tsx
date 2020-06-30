import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import * as postsActions from 'store/feedPost/Actions';
import * as postSelectors from 'store/feedPost/Selectors';
import { IPost } from '../../interfaces/post';
import PostItem from './PostItem/PostItem';

class PostContainer extends Component<any> {
  componentDidMount() {
    this.props.queryPostsForFeed(0, 5);
  }
  render() {
    return (
      <div>
        <h1>The Post</h1>
        {this.props.posts.map((post: IPost) => (
          <PostItem key={post.id as number} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    posts: postSelectors.posts(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    queryPostsForFeed: (offset: number, limit: number) => dispatch(postsActions.querySomePost(offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
