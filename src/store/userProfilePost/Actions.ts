import { ProfilePostActionTypes } from './Types';
import { createPostAPI, deletePostAPI, updatePostAPI } from 'api/posts/posts';
import { IPost } from 'interfaces/post';
import { getUserPostsAPI } from 'api/users/users';

export const isCreatingNewPost = () => ({
  type: ProfilePostActionTypes.IS_CREATING_NEW_PROFILE_POSTS,
  payload: {
    isCreatingPost: true
  }
});

export const newUserProfilePost = (post: IPost) => ({
  type: ProfilePostActionTypes.NEW_PROFILE_POSTS,
  payload: {
    isCreatingPost: false,
    creatingNewPostFailed: false,
    creatingNewPostSuccess: true,
    post: post
  }
});

export const creatingNewPostFailed = () => ({
  type: ProfilePostActionTypes.NEW_POST_FAILED,
  payload: {
    isCreatingPost: false,
    creatingNewPostFailed: true,
    creatingNewPostSuccess: false
  }
});

export const submitNewUserPost = (title: string, body: string) => {
  return async (dispatch: Function) => {
    dispatch(isCreatingNewPost());
    try {
      const { payload } = await createPostAPI(title, body);
      dispatch(newUserProfilePost(payload.post));
    } catch (error) {
      dispatch(creatingNewPostFailed());
    }
  };
};

// ! ASYNC ACTIONS --------------------------------------------------

// * READ SOME POSTS ACTIONS --------------------------------------------------

export const fetchingUserPosts = () => ({
  type: ProfilePostActionTypes.IS_FETCHING_USER_POSTS,
  payload: {
    isFetchingUserPosts: true
  }
});

export const userProfilePost = (posts: IPost[]) => ({
  type: ProfilePostActionTypes.PROFILE_POSTS,
  payload: {
    isFetchingUserPosts: false,
    isFetchingUserPostsSuccess: true,
    posts: posts
  }
});

export const fetchingUserPostsFailed = () => ({
  type: ProfilePostActionTypes.IS_FETCHING_USER_POSTS_FAILED,
  payload: {
    isFetchingUserPosts: false,
    isFetchingUserPostsFailed: true
  }
});

export const getUserPosts = (userID: number, offset: number, limit: number) => {
  return async (dispatch: Function) => {
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

// * UPDATE ACTIONS --------------------------------------------------

export const isEditingPost = () => ({
  type: ProfilePostActionTypes.IS_EDITING_POST,
  payload: {
    isEditingPost: true
  }
});

export const isEditingPostSuccess = (post: IPost) => ({
  type: ProfilePostActionTypes.EDITING_POST_SUCCESS,
  payload: {
    isEditingPost: false,
    editingSuccess: true,
    post
  }
});

export const isEditingPostFailed = () => ({
  type: ProfilePostActionTypes.EDITING_POST_FAILED,
  payload: {
    isEditingPost: false,
    editingFailed: true
  }
});

export const updateUserPost = (postId: string, title: string, body: string) => {
  return async (dispatch: Function) => {
    dispatch(isEditingPost());
    try {
      const { payload } = await updatePostAPI(postId, title, body);
      dispatch(isEditingPostSuccess(payload.post));
    } catch (error) {
      dispatch(isEditingPostFailed());
    }
  };
};

// * UPDATE ACTIONS --------------------------------------------------

// * DELETE ACTIONS --------------------------------------------------

export const deletingUserProfilePost = () => ({
  type: ProfilePostActionTypes.DELETING_PROFILE_POSTS,
  payload: {
    isDeletingProfilePost: true
  }
});

export const deletingUserProfilePostSuccess = (postId: string) => ({
  type: ProfilePostActionTypes.DELETING_PROFILE_POSTS_SUCCESS,
  payload: {
    isDeletingProfilePost: false,
    deletingProfilePostSuccess: true,
    postId
  }
});

export const deletingUserProfilePostFailed = () => ({
  type: ProfilePostActionTypes.DELETING_PROFILE_POSTS_FAILED,
  payload: {
    isDeletingProfilePost: false,
    deletingProfilePostFailed: true
  }
});

export const deleteUserProfilePost = (postId: string) => {
  return async (dispatch: Function) => {
    dispatch(deletingUserProfilePost());
    try {
      await deletePostAPI(postId);
      dispatch(deletingUserProfilePostSuccess(postId));
    } catch (error) {
      dispatch(deletingUserProfilePostFailed());
    }
  };
};

// * DELETE ACTIONS --------------------------------------------------

// ! ASYNC ACTIONS --------------------------------------------------
