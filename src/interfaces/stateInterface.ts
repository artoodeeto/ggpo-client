import { IUser } from './user';
import { ISession } from './session';
import { IStateFeedPost } from './post';
import { IStateGetSomeGameGroup } from './gameGroup';
import { IStateGameGroupItem } from './gameGroupItem';

export interface IState {
  session: ISession;
  user: IUser;
  feedPost: IStateFeedPost;
  userProfilePost: IStateFeedPost;
  gameGroups: IStateGetSomeGameGroup;
  gameGroupItem: IStateGameGroupItem;
}
