import { IStateProfilePost } from 'interfaces/post';
import { ProfilePostEnumTypes, UserProfilePostActionTypes } from './Types';
import { userProfilePostInitialState } from 'models/Post/userProfilePostInitialState';
import { deleteAUserPost } from 'helper/onDeleteUserPost';
import { updateAUserPost } from 'helper/onUpdateUserPost';

const userProfilePost = (
  state = userProfilePostInitialState,
  action: UserProfilePostActionTypes
): IStateProfilePost => {
  switch (action.type) {
    case ProfilePostEnumTypes.IS_FETCHING_USER_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.PROFILE_POSTS: {
      return {
        ...state,
        isFetchingUserPosts: action.payload.isFetchingUserPosts,
        isFetchingUserPostsSuccess: action.payload.isFetchingUserPostsSuccess,
        posts: [...action.payload.posts]
      };
    }
    case ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.NEW_PROFILE_POSTS: {
      return {
        ...state,
        isCreatingPost: action.payload.isCreatingPost,
        creatingNewPostFailed: action.payload.creatingNewPostFailed,
        creatingNewPostSuccess: action.payload.creatingNewPostSuccess,
        posts: [action.payload.post, ...state.posts]
      };
    }
    case ProfilePostEnumTypes.NEW_POST_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.DELETING_PROFILE_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS: {
      return {
        ...state,
        isDeletingProfilePost: action.payload.isDeletingProfilePost,
        deletingProfilePostSuccess: action.payload.deletingProfilePostSuccess,
        posts: deleteAUserPost(state.posts, action.payload.postId)
      };
    }
    case ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.IS_EDITING_POST: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.EDITING_POST_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ProfilePostEnumTypes.EDITING_POST_SUCCESS: {
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
