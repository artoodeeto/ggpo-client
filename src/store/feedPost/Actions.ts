import { getSomePostAPI } from 'api/posts/posts';
import { IPost } from 'interfaces/post';
import { AppThunk } from 'interfaces/thunkType';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { PostFeedEnumTypes, IGetSomePostsFeed, IIsFetchingPosts, IIsFetchingPostsFailed } from './Types';

// ! QUERY SOME POSTS =================================

export const getSomePostsForFeed = (posts: IPost[]): IGetSomePostsFeed => ({
  type: PostFeedEnumTypes.GET_SOME_FEED_POSTS,
  payload: {
    isFetchingPosts: false,
    fetchingPostsFailed: false,
    posts: [...posts]
  }
});

export const isFetchingPosts = (): IIsFetchingPosts => ({
  type: PostFeedEnumTypes.IS_FETCHING_FEED_POSTS,
  payload: {
    isFetchingPosts: true
  }
});

export const isFetchingPostsFailed = (): IIsFetchingPostsFailed => ({
  type: PostFeedEnumTypes.IS_FETCHING_FEED_POSTS_FAILED,
  payload: {
    fetchingPostsFailed: true
  }
});

export const querySomePost = (offset: number, limit: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(isFetchingPosts());
    try {
      const { payload } = await getSomePostAPI(offset, limit);
      dispatch(getSomePostsForFeed(payload.posts));
    } catch (error) {
      dispatch(isFetchingPostsFailed());
    }
  };
};

// ! QUERY SOME POSTS =================================
