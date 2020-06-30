import { IUser } from './user';
import { ISession } from './session';
import { IStatePost } from './post';

export interface IState {
  session: ISession;
  user: IUser;
  feedPost: IStatePost;
}
