import { IPost } from 'interfaces/post';

export function deleteAUserPost(statePost: IPost[], actionPostID: number): IPost[] {
  return statePost.filter((post: IPost) => Number(post.id) !== Number(actionPostID));
}
