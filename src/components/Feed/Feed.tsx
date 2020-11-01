import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostContainer from 'components/Post/PostContainer';
import { IPost } from 'interfaces/post';
import { querySomePost } from 'store/feedPost/Actions';
import { posts } from 'store/feedPost/Selectors';
// import { isUserAuthorized } from 'store/session/Selectors';

type FeedProps = {
  // queryPostsForFeed: (offset: number, limit: number) => void;
  // posts: IPost[];
};

const Feed: FC<FeedProps> = () => {
  const dispatch = useDispatch();
  const postsFeed: IPost[] = useSelector(posts);
  useEffect(() => {
    // queryPostsForFeed(0, 5);
    dispatch(querySomePost(0, 5));
  }, [dispatch]);
  // TODO: load new posts when scrolling
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/game_groups">GG</Link>

      <h1>I am FEED TEST!</h1>
      <PostContainer posts={postsFeed} showOptionsBtn={false} />
    </div>
  );
};

// const mapStateToProps = (state: IState) => {
//   return {
//     isAuthenticated: isUserAuthorized(state),
//     posts: posts(state)
//   };
// };

// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     queryPostsForFeed: (offset: number, limit: number) => dispatch(querySomePost(offset, limit))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Feed);

export default Feed;
