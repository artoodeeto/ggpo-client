import { IUser } from 'interfaces/user';

/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/user.ts}
 */
export const userInitialState: IUser = {
  id: null,
  username: '',
  email: ''
};
