import { IUser } from './user';

export interface IPost {
  id: number | null;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user?: IUser | null;
}

export interface IStateFeedPost {
  isFetchingPosts: boolean;
  fetchingPostsFailed: boolean;
  posts: IPost[];
}

export interface IStateProfilePost {
  isFetchingUserPosts: boolean;
  isFetchingUserPostsSuccess: boolean;
  isFetchingUserPostsFailed: boolean;
  isCreatingPost: boolean;
  creatingNewPostFailed: boolean;
  creatingNewPostSuccess: boolean;
  isDeletingProfilePost: boolean;
  deletingProfilePostFailed: boolean;
  deletingProfilePostSuccess: boolean;
  isEditingPost: boolean;
  editingSuccess: boolean;
  editingFailed: boolean;
  posts: IPost[];
}
