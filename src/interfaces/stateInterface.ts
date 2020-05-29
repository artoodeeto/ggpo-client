import { IUser } from './user';
import { ISession } from './session';

export interface IState {
  session: ISession;
  user: IUser;
}
