import { combineReducers } from 'redux';
import session from '../components/SignupLoginContainer/Store/Reducers';

/**
 * @description
 * When adding a new object/reducer on the store,
 * make sure that the State interface is also updated,
 * {@link ../interfaces/stateInterfaces.ts}
 */

export default combineReducers({ user: session });
