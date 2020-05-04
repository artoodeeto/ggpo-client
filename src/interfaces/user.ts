import { Post } from './post';
import { usersGameGroup } from './usersGameGroup';

export interface User {
  id: number | null;
  username: string;
  email: string;
  isAuthenticated: boolean;
  createdAt?: string;
  updatedAt?: string;
  usersGameGroups?: usersGameGroup[];
  posts?: Post[];
}
