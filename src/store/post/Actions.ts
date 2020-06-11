import { PostActionTypes } from './Types';
import { getSomePostAPI } from 'api/posts/posts';
import { IPost } from 'interfaces/post';

export const getSomePostsForFeed = (posts: IPost[]) => ({
  type: PostActionTypes.GET_SOME_POSTS,
  payload: {
    isFetchingPosts: false,
    fetchingPostsFailed: false,
    posts: [...posts]
  }
});

export const isFetchingPosts = () => ({
  type: PostActionTypes.IS_FETCHING_POSTS,
  payload: {
    isFetchingPosts: true
  }
});

export const isFetchingPostsFailed = () => ({
  type: PostActionTypes.IS_FETCHING_POSTS_FAILED,
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
