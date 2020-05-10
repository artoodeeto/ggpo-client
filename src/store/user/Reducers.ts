import { userInitialState } from 'models/User/userInitialState';
import { UserActionTypes } from './Types';

const initState = {
  ...userInitialState
};

const user = (state = initState, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_BASIC: {
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

export default user;
