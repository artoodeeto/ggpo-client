import { SessionActionTypes } from './Types';
import { sessionInitialState } from 'models/Session/sessionInitialState';

const initState = {
  ...sessionInitialState
};

const session = (state = initState, action: any) => {
  switch (action.type) {
    case SessionActionTypes.IS_LOGGING_IN_OR_SIGNING_UP: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionActionTypes.LOGIN_SIGNUP_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionActionTypes.LOGOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionActionTypes.SIGNUP_LOGIN_FAILED: {
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
