import { userInitialState } from 'models/User/userInitialState';
import { UserActionTypes, UserEnumTypes } from './Types';
import { IUser } from '../../interfaces/user';

const user = (state = userInitialState, action: UserActionTypes): IUser => {
  switch (action.type) {
    case UserEnumTypes.USER_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UserEnumTypes.USER_LOGOUT: {
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
