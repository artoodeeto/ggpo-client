import { SessionActionTypes, SessionEnumTypes } from './Types';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { ISession } from '../../interfaces/session';

const session = (state = sessionInitialState, action: SessionActionTypes): ISession => {
  switch (action.type) {
    case SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionEnumTypes.LOGIN_SIGNUP_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionEnumTypes.LOGOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionEnumTypes.SIGNUP_LOGIN_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default session;
