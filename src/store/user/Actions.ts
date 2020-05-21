import { UserActionTypes } from './Types';
import { User } from 'interfaces/user';
import { userInitialState } from 'models/User/userInitialState';

export const setupUserOnSuccessLoginORSignup = (user: User) => ({
  type: UserActionTypes.USER_BASIC,
  payload: {
    ...user
  }
});

export const logoutUser = () => ({
  type: UserActionTypes.USER_LOGOUT,
  payload: {
    ...userInitialState
  }
});

/**
 * @description
 * All async/redux-thunk/side-effects should be under this comments
 *
 */
