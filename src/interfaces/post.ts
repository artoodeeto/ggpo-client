import { IUser } from './user';

export interface IPost {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
