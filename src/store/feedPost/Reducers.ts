import { IStateFeedPost } from 'interfaces/post';
import { PostFeedEnumTypes, FeedPostActionTypes } from './Types';
import { postFeedInitialState } from 'models/Post/postFeedInitialState';

const feedPost = (state = postFeedInitialState, action: FeedPostActionTypes): IStateFeedPost => {
  switch (action.type) {
    case PostFeedEnumTypes.GET_SOME_FEED_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostFeedEnumTypes.IS_FETCHING_FEED_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostFeedEnumTypes.IS_FETCHING_FEED_POSTS_FAILED: {
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
