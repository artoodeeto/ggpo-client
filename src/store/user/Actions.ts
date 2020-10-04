import { ILogoutUser, ISetupUserOnSuccessLoginORSignup, UserEnumTypes } from './Types';
import { IUser } from 'interfaces/user';
import { userInitialState } from 'models/User/userInitialState';

export const setupUserOnSuccessLoginORSignup = (user: IUser): ISetupUserOnSuccessLoginORSignup => ({
  type: UserEnumTypes.USER_INFO,
  payload: {
    ...user
  }
});

export const logoutUser = (): ILogoutUser => ({
  type: UserEnumTypes.USER_LOGOUT,
  payload: {
    ...userInitialState
  }
});
