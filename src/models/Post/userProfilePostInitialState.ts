import { IStateProfilePost } from '../../interfaces/post';
/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/post.ts}
 */
export const userProfilePostInitialState: IStateProfilePost = {
  isFetchingUserPosts: false,
  isFetchingUserPostsSuccess: false,
  isFetchingUserPostsFailed: false,
  isCreatingPost: false,
  creatingNewPostFailed: false,
  creatingNewPostSuccess: false,
  isDeletingProfilePost: false,
  deletingProfilePostFailed: false,
  deletingProfilePostSuccess: false,
  isEditingPost: false,
  editingSuccess: false,
  editingFailed: false,
  posts: []
};
