import { combineReducers } from 'redux';
import session from '../session/Reducers';
import user from '../user/Reducers';
import feedPost from '../feedPost/Reducers';

/**
 * @description
 * When adding a new object/reducer on the store,
 * make sure that the State interface is also updated,
 * {@link ../interfaces/stateInterfaces.ts}
 */
export default combineReducers({ session, user, feedPost });
