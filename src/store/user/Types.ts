import { IUsersGameGroup } from 'interfaces/usersGameGroup';
import { IPost } from 'interfaces/post';

export enum UserEnumTypes {
  USER_INFO = 'USER_INFO',
  USER_LOGOUT = 'USER_LOGOUT'
}

export interface ISetupUserOnSuccessLoginORSignup {
  type: typeof UserEnumTypes.USER_INFO;
  payload: {
    id: number;
    username: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
    usersGameGroups?: IUsersGameGroup[];
    posts?: IPost[];
  };
}

export interface ILogoutUser {
  type: typeof UserEnumTypes.USER_LOGOUT;
  payload: {
    id: number;
    username: string;
    email: string;
  };
}

export type UserActionTypes = ISetupUserOnSuccessLoginORSignup | ILogoutUser;
