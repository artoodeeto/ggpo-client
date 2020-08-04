import React, { useEffect, FC } from 'react';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import * as sessionSelectors from 'store/session/Selectors';
import * as postSelectors from 'store/feedPost/Selectors';
import * as postsActions from 'store/feedPost/Actions';
import { useHistory } from 'react-router-dom';
import PostContainer from 'components/Post/PostContainer';

const Feed: FC = ({ queryPostsForFeed, posts }: any) => {
  const history = useHistory();
  const onGotoProfile = () => {
    history.push('/profile');
  };

  useEffect(() => {
    queryPostsForFeed(0, 5);
  }, [queryPostsForFeed]);
  // TODO: load new posts when scrolling
  return (
    <div>
      <button onClick={onGotoProfile}>Profile</button>
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
