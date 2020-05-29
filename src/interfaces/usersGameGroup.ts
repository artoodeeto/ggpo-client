import { IGameGroup } from './gameGroup';
import { IUser } from './user';

export interface IUsersGameGroup {
  id: number;
  createdAt: string;
  updatedAt: string;
  users: IUser[];
  gameGroups: IGameGroup[];
}
