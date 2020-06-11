import { IStatePost } from '../../interfaces/post';
import { PostActionTypes } from './Types';
import { postInitialState } from 'models/Post/postInitialState';

const initState = {
  ...postInitialState
};

const post = (state = initState, action: any): IStatePost => {
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

export default post;
