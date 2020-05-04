import { User } from './user';

export interface LoginSuccess {
  meta: {
    expToken: string;
    issueDate: Date;
  };
  payload: {
    token: string;
    user: User;
  };
}

export interface LoginFailed {
  error: string;
}
