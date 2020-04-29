import { User } from './user';

export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}
