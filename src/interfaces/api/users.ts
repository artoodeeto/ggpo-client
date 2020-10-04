import { IPost } from 'interfaces/post';

export interface IUserPostsResponse {
  meta: {
    count: number;
  };
  payload: {
    posts: IPost[];
  };
}
