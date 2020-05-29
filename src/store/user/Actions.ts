import { UserActionTypes } from './Types';
import { IUser } from 'interfaces/user';
import { userInitialState } from 'models/User/userInitialState';

export const setupUserOnSuccessLoginORSignup = (user: IUser) => ({
  type: UserActionTypes.USER_INFO,
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
