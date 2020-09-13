import React, { useEffect, FC } from 'react';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import * as sessionSelectors from 'store/session/Selectors';
import * as postSelectors from 'store/feedPost/Selectors';
import * as postsActions from 'store/feedPost/Actions';
import { Link } from 'react-router-dom';
import PostContainer from 'components/shared/Post/PostContainer';

const Feed: FC = ({ queryPostsForFeed, posts }: any) => {
  useEffect(() => {
    queryPostsForFeed(0, 5);
  }, [queryPostsForFeed]);
  // TODO: load new posts when scrolling
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/game_groups">GG</Link>

      <h1>I am FEED TEST!</h1>
      <PostContainer posts={posts} showDeletePostBtn={false} />
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    isAuthenticated: sessionSelectors.isUserAuthorized(state),
    posts: postSelectors.posts(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    queryPostsForFeed: (offset: number, limit: number) => dispatch(postsActions.querySomePost(offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
