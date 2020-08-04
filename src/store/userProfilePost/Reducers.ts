import { IStateProfilePost } from 'interfaces/post';
import { ProfilePostActionTypes } from './Types';
import { userProfilePostInitialState } from 'models/Post/userProfilePostInitialState';
import { deleteAUserPost } from 'helper/onDeleteUserPost';
import { updateAUserPost } from 'helper/onUpdateUserPost';

const initState = {
  ...userProfilePostInitialState
};

const userProfilePost = (state = initState, action: any): IStateProfilePost => {
  switch (action.type) {
    case ProfilePostActionTypes.IS_FETCHING_USER_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.PROFILE_POSTS: {
      return {
        ...state,
        isFetchingUserPosts: action.payload.isFetchingUserPosts,
        isFetchingUserPostsSuccess: action.payload.isFetchingUserPostsSuccess,
        posts: [...action.payload.posts]
      };
    }
    case ProfilePostActionTypes.IS_FETCHING_USER_POSTS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.IS_CREATING_NEW_PROFILE_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.NEW_PROFILE_POSTS: {
      return {
        ...state,
        isCreatingPost: action.payload.isCreatingPost,
        creatingNewPostFailed: action.payload.creatingNewPostFailed,
        creatingNewPostSuccess: action.payload.creatingNewPostSuccess,
        posts: [action.payload.post, ...state.posts]
      };
    }
    case ProfilePostActionTypes.NEW_POST_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.DELETING_PROFILE_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.DELETING_PROFILE_POSTS_SUCCESS: {
      return {
        ...state,
        isDeletingProfilePost: action.payload.isDeletingProfilePost,
        deletingProfilePostSuccess: action.payload.deletingProfilePostSuccess,
        posts: deleteAUserPost(state.posts, action.payload.postId)
      };
    }
    case ProfilePostActionTypes.DELETING_PROFILE_POSTS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.IS_EDITING_POST: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.EDITING_POST_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostActionTypes.EDITING_POST_SUCCESS: {
      return {
        ...state,
        isEditingPost: action.payload.isEditingPost,
        editingSuccess: action.payload.editingSuccess,
        posts: updateAUserPost(state.posts, action.payload.post)
      };
    }
    default: {
      return state;
    }
  }
};

export default userProfilePost;
