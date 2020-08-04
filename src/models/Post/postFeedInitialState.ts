import { IStateFeedPost } from '../../interfaces/post';
/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/post.ts}
 */
export const postFeedInitialState: IStateFeedPost = {
  isFetchingPosts: false,
  fetchingPostsFailed: false,
  posts: []
};

// const post: IPost = {
//   id: null,
//   title: '',
//   body: '',
//   createdAt: '',
//   updatedAt: '',
//   user: null
// };
