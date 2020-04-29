import { GameGroup } from './gameGroup';
import { User } from './user';

export interface usersGameGroup {
  id: number;
  createdAt: string;
  updatedAt: string;
  users: User[];
  gameGroups: GameGroup[];
}
