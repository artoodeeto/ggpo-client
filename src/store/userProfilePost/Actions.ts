import {
  ICreatingNewPostFailed,
  IDeletingUserProfilePost,
  IDeletingUserProfilePostFailed,
  IDeletingUserProfilePostSuccess,
  IFetchingUserPosts,
  IFetchingUserPostsFailed,
  IIsCreatingNewPost,
  IIsEditingPost,
  IIsEditingPostFailed,
  IIsEditingPostSuccess,
  INewUserProfilePost,
  IUserProfilePost,
  ProfilePostEnumTypes
} from './Types';
import { createPostAPI, deletePostAPI, updatePostAPI } from 'api/posts/posts';
import { IPost } from 'interfaces/post';
import { getUserPostsAPI } from 'api/users/users';
import { AppThunk } from 'interfaces/thunkType';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';

// ** SUBMIT NEW POST =======================

export const isCreatingNewPost = (): IIsCreatingNewPost => ({
  type: ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS,
  payload: {
    isCreatingPost: true
  }
});

export const newUserProfilePost = (post: IPost): INewUserProfilePost => ({
  type: ProfilePostEnumTypes.NEW_PROFILE_POSTS,
  payload: {
    isCreatingPost: false,
    creatingNewPostFailed: false,
    creatingNewPostSuccess: true,
    post: post
  }
});

export const creatingNewPostFailed = (): ICreatingNewPostFailed => ({
  type: ProfilePostEnumTypes.NEW_POST_FAILED,
  payload: {
    isCreatingPost: false,
    creatingNewPostFailed: true,
    creatingNewPostSuccess: false
  }
});

export const submitNewUserPost = (title: string, body: string): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(isCreatingNewPost());
    try {
      const { payload } = await createPostAPI(title, body);
      dispatch(newUserProfilePost(payload.post));
    } catch (error) {
      dispatch(creatingNewPostFailed());
    }
  };
};

// ** SUBMIT NEW POST =======================

// * READ SOME POSTS ACTIONS --------------------------------------------------

export const fetchingUserPosts = (): IFetchingUserPosts => ({
  type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS,
  payload: {
    isFetchingUserPosts: true
  }
});

export const userProfilePost = (posts: IPost[]): IUserProfilePost => ({
  type: ProfilePostEnumTypes.PROFILE_POSTS,
  payload: {
    isFetchingUserPosts: false,
    isFetchingUserPostsSuccess: true,
    posts: posts
  }
});

export const fetchingUserPostsFailed = (): IFetchingUserPostsFailed => ({
  type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED,
  payload: {
    isFetchingUserPosts: false,
    isFetchingUserPostsFailed: true
  }
});

export const getUserPosts = (userID: number, offset: number, limit: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(fetchingUserPosts());
    try {
      const { payload } = await getUserPostsAPI(userID, offset, limit);
      dispatch(userProfilePost(payload.posts));
    } catch (error) {
      dispatch(fetchingUserPostsFailed());
    }
  };
};

// * READ SOME POSTS ACTIONS --------------------------------------------------

// ! UPDATE USER POST --------------------------------------------------

export const isEditingPost = (): IIsEditingPost => ({
  type: ProfilePostEnumTypes.IS_EDITING_POST,
  payload: {
    isEditingPost: true
  }
});

export const isEditingPostSuccess = (post: IPost): IIsEditingPostSuccess => ({
  type: ProfilePostEnumTypes.EDITING_POST_SUCCESS,
  payload: {
    isEditingPost: false,
    editingSuccess: true,
    post
  }
});

export const isEditingPostFailed = (): IIsEditingPostFailed => ({
  type: ProfilePostEnumTypes.EDITING_POST_FAILED,
  payload: {
    isEditingPost: false,
    editingFailed: true
  }
});

export const updateUserPost = (postId: number, title: string, body: string): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(isEditingPost());
    try {
      const { payload } = await updatePostAPI(postId, title, body);
      dispatch(isEditingPostSuccess(payload.post));
    } catch (error) {
      dispatch(isEditingPostFailed());
    }
  };
};

// ! UPDATE USER POST  --------------------------------------------------

// * DELETE USER PROFILE POST --------------------------------------------------

export const deletingUserProfilePost = (): IDeletingUserProfilePost => ({
  type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS,
  payload: {
    isDeletingProfilePost: true
  }
});

export const deletingUserProfilePostSuccess = (postId: number): IDeletingUserProfilePostSuccess => ({
  type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS,
  payload: {
    isDeletingProfilePost: false,
    deletingProfilePostSuccess: true,
    postId
  }
});

export const deletingUserProfilePostFailed = (): IDeletingUserProfilePostFailed => ({
  type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED,
  payload: {
    isDeletingProfilePost: false,
    deletingProfilePostFailed: true
  }
});

export const deleteUserProfilePost = (postId: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(deletingUserProfilePost());
    try {
      await deletePostAPI(postId);
      dispatch(deletingUserProfilePostSuccess(postId));
    } catch (error) {
      dispatch(deletingUserProfilePostFailed());
    }
  };
};

// * DELETE USER PROFILE POST --------------------------------------------------
