import { Post } from './post';
import { usersGameGroup } from './usersGameGroup';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  usersGameGroups: usersGameGroup[];
  posts: Post[];
}
