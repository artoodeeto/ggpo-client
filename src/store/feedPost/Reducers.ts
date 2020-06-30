import { IStatePost } from '../../interfaces/post';
import { PostActionTypes } from './Types';
import { postFeedInitialState } from 'models/Post/postFeedInitialState';

const initState = {
  ...postFeedInitialState
};

const feedPost = (state = initState, action: any): IStatePost => {
  switch (action.type) {
    case PostActionTypes.GET_SOME_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostActionTypes.IS_FETCHING_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case PostActionTypes.IS_FETCHING_POSTS_FAILED: {
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
