import { IPost } from 'interfaces/post';

export enum ProfilePostEnumTypes {
  IS_FETCHING_USER_POSTS = 'IS_FETCHING_USER_POSTS',
  IS_FETCHING_USER_POSTS_SUCCESS = 'IS_FETCHING_USER_POSTS_SUCCESS',
  IS_FETCHING_USER_POSTS_FAILED = 'IS_FETCHING_USER_POSTS_FAILED',
  IS_CREATING_NEW_PROFILE_POSTS = 'IS_CREATING_NEW_PROFILE_POSTS',
  NEW_POST_FAILED = 'NEW_POST_FAILED',
  NEW_POST_SUCCESS = 'NEW_POST_SUCCESS',
  PROFILE_POSTS = 'PROFILE_POSTS',
  NEW_PROFILE_POSTS = 'NEW_PROFILE_POSTS',
  DELETING_PROFILE_POSTS = 'DELETING_PROFILE_POSTS',
  DELETING_PROFILE_POSTS_FAILED = 'DELETING_PROFILE_POSTS_FAILED',
  DELETING_PROFILE_POSTS_SUCCESS = 'DELETING_PROFILE_POSTS_SUCCESS',
  IS_EDITING_POST = 'IS_EDITING_POST',
  EDITING_POST_SUCCESS = 'EDITING_POST_SUCCESS',
  EDITING_POST_FAILED = 'EDITING_POST_FAILED'
}

export interface IIsCreatingNewPost {
  type: typeof ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS;
  payload: {
    isCreatingPost: boolean;
  };
}

export interface INewUserProfilePost {
  type: typeof ProfilePostEnumTypes.NEW_PROFILE_POSTS;
  payload: {
    isCreatingPost: boolean;
    creatingNewPostFailed: boolean;
    creatingNewPostSuccess: boolean;
    post: IPost;
  };
}

export interface ICreatingNewPostFailed {
  type: typeof ProfilePostEnumTypes.NEW_POST_FAILED;
  payload: {
    isCreatingPost: boolean;
    creatingNewPostFailed: boolean;
    creatingNewPostSuccess: boolean;
  };
}

export interface IFetchingUserPosts {
  type: typeof ProfilePostEnumTypes.IS_FETCHING_USER_POSTS;
  payload: {
    isFetchingUserPosts: boolean;
  };
}

export interface IUserProfilePost {
  type: typeof ProfilePostEnumTypes.PROFILE_POSTS;
  payload: {
    isFetchingUserPosts: boolean;
    isFetchingUserPostsSuccess: boolean;
    posts: IPost[];
  };
}

export interface IFetchingUserPostsFailed {
  type: typeof ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED;
  payload: {
    isFetchingUserPosts: boolean;
    isFetchingUserPostsFailed: boolean;
  };
}

export interface IIsEditingPost {
  type: typeof ProfilePostEnumTypes.IS_EDITING_POST;
  payload: {
    isEditingPost: boolean;
  };
}

export interface IIsEditingPostSuccess {
  type: typeof ProfilePostEnumTypes.EDITING_POST_SUCCESS;
  payload: {
    isEditingPost: boolean;
    editingSuccess: boolean;
    post: IPost;
  };
}

export interface IIsEditingPostFailed {
  type: typeof ProfilePostEnumTypes.EDITING_POST_FAILED;
  payload: {
    isEditingPost: boolean;
    editingFailed: boolean;
  };
}

export interface IDeletingUserProfilePost {
  type: typeof ProfilePostEnumTypes.DELETING_PROFILE_POSTS;
  payload: {
    isDeletingProfilePost: boolean;
  };
}

export interface IDeletingUserProfilePostSuccess {
  type: typeof ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS;
  payload: {
    isDeletingProfilePost: boolean;
    deletingProfilePostSuccess: boolean;
    postId: number;
  };
}

export interface IDeletingUserProfilePostFailed {
  type: typeof ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED;
  payload: {
    isDeletingProfilePost: boolean;
    deletingProfilePostFailed: boolean;
  };
}

export type UserProfilePostActionTypes =
  | IIsCreatingNewPost
  | INewUserProfilePost
  | ICreatingNewPostFailed
  | IFetchingUserPosts
  | IUserProfilePost
  | IFetchingUserPostsFailed
  | IIsEditingPost
  | IIsEditingPostSuccess
  | IIsEditingPostFailed
  | IDeletingUserProfilePost
  | IDeletingUserProfilePostSuccess
  | IDeletingUserProfilePostFailed;
