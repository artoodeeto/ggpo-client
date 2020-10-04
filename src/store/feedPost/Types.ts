import { IPost } from 'interfaces/post';

export enum PostFeedEnumTypes {
  GET_SOME_FEED_POSTS = 'GET_SOME_FEED_POSTS',
  IS_FETCHING_FEED_POSTS = 'IS_FETCHING_FEED_POSTS',
  IS_FETCHING_FEED_POSTS_FAILED = 'IS_FETCHING_FEED_POSTS_FAILED'
}

export interface IGetSomePostsFeed {
  type: typeof PostFeedEnumTypes.GET_SOME_FEED_POSTS;
  payload: {
    isFetchingPosts: boolean;
    fetchingPostsFailed: false;
    posts: IPost[];
  };
}

export interface IIsFetchingPosts {
  type: typeof PostFeedEnumTypes.IS_FETCHING_FEED_POSTS;
  payload: {
    isFetchingPosts: boolean;
  };
}

export interface IIsFetchingPostsFailed {
  type: typeof PostFeedEnumTypes.IS_FETCHING_FEED_POSTS_FAILED;
  payload: {
    fetchingPostsFailed: boolean;
  };
}

export type FeedPostActionTypes = IGetSomePostsFeed | IIsFetchingPosts | IIsFetchingPostsFailed;
