import { IUser } from './user';
import { ISession } from './session';
import { IStateFeedPost } from './post';

export interface IState {
  session: ISession;
  user: IUser;
  feedPost: IStateFeedPost;
  userProfilePost: IStateFeedPost;
}
