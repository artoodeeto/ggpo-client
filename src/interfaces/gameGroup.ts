import { IUsersGameGroup } from './usersGameGroup';

export interface IGameGroup {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  usersGameGroups: IUsersGameGroup[];
}
