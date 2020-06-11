import { IUser } from './user';

export interface IPost {
  id: number | null;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: IUser | null;
}

export interface IStatePost {
  isFetchingPosts: boolean;
  fetchingPostsFailed: boolean;
  posts: IPost[];
}
