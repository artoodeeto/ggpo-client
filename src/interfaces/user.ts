import { IPost } from './post';
import { IUsersGameGroup } from './usersGameGroup';

/**
 * @description
 * When adding a user interface and it will be use as a state,
 * user initial state should also be
 */
export interface IUser {
  id: number | null;
  username: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  usersGameGroups?: IUsersGameGroup[];
  posts?: IPost[];
}
