import { Post } from './post';
import { usersGameGroup } from './usersGameGroup';

/**
 * @description
 * When adding a user interface and it will be use as a state,
 * user initial state should also be
 */
export interface User {
  id: number | null;
  username: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  usersGameGroups?: usersGameGroup[];
  posts?: Post[];
}
