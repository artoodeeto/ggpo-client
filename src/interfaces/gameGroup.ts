import { usersGameGroup } from './usersGameGroup';

export interface GameGroup {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  usersGameGroups: usersGameGroup[];
}
