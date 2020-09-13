import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import { IPost } from '../../../interfaces/post';
import PostItem from './PostItem/PostItem';
class PostContainer extends Component<any> {
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

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
