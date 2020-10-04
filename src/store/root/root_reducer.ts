import { combineReducers } from 'redux';
import session from '../session/Reducers';
import user from '../user/Reducers';
import feedPost from '../feedPost/Reducers';
import userProfilePost from '../userProfilePost/Reducers';
import gameGroups from '../gameGroup/Reducers';
import gameGroupItem from '../gameGroupItem/Reducers';
import { IState } from 'interfaces/stateInterface';

/**
 * @description
 * When adding a new object/reducer on the store,
 * make sure that the State interface is also updated,
 * {@link ../interfaces/stateInterfaces.ts}
 */
export const rootReducer = combineReducers<IState>({
  session,
  user,
  feedPost,
  userProfilePost,
  gameGroups,
  gameGroupItem
});

export type RootState = ReturnType<typeof rootReducer>;
