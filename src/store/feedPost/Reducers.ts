import { IStateFeedPost } from 'interfaces/post';
import { PostFeedActionTypes } from './Types';
import { postFeedInitialState } from 'models/Post/postFeedInitialState';

const initState = {
  ...postFeedInitialState
};

const feedPost = (state = initState, action: any): IStateFeedPost => {
  switch (action.type) {
    case PostFeedActionTypes.GET_SOME_FEED_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostFeedActionTypes.IS_FETCHING_FEED_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostFeedActionTypes.IS_FETCHING_FEED_POSTS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default feedPost;
