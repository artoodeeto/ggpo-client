import { IUser } from 'interfaces/user';

export interface ISessionAPIResponse {
  meta: {
    issueDate: number;
    expToken: number;
  };
  payload: {
    user: IUser;
    token: string;
  };
}
