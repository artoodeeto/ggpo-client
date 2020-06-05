import { userInitialState } from 'models/User/userInitialState';
import { UserActionTypes } from './Types';
import { IUser } from '../../interfaces/user';

const initState = {
  ...userInitialState
};

const user = (state = initState, action: any): IUser => {
  switch (action.type) {
    case UserActionTypes.USER_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UserActionTypes.USER_LOGOUT: {
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
