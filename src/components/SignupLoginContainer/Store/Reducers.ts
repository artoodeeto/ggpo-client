import { SessionTypes } from './Types';
import { userInitialState } from 'models/User/initialState';

const initialState = {
  ...userInitialState
};

const session = (state = initialState, action: any) => {
  switch (action.type) {
    case SessionTypes.LOGIN_SIGNUP_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SessionTypes.LOGOUT: {
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
