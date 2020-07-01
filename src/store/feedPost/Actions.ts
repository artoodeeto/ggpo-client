import { PostFeedActionTypes } from './Types';
import { getSomePostAPI } from 'api/posts/posts';
import { IPost } from 'interfaces/post';

export const getSomePostsForFeed = (posts: IPost[]) => ({
  type: PostFeedActionTypes.GET_SOME_FEED_POSTS,
  payload: {
    isFetchingPosts: false,
    fetchingPostsFailed: false,
    posts: [...posts]
  }
});

export const isFetchingPosts = () => ({
  type: PostFeedActionTypes.IS_FETCHING_FEED_POSTS,
  payload: {
    isFetchingPosts: true
  }
});

export const isFetchingPostsFailed = () => ({
  type: PostFeedActionTypes.IS_FETCHING_FEED_POSTS_FAILED,
  payload: {
    fetchingPostsFailed: true
  }
});

/**
 * @description
 * All async/redux-thunk/side-effects should be under this comments
 *
 */

export const querySomePost = (offset: number, limit: number) => {
  return async (dispatch: Function) => {
    dispatch(isFetchingPosts());
    try {
      const { payload } = await getSomePostAPI(offset, limit);
      dispatch(getSomePostsForFeed(payload.posts));
    } catch (error) {
      dispatch(isFetchingPostsFailed());
    }
  };
};
