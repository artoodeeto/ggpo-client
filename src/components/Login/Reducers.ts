import { LoginTypes } from './Types';

const initialState = {
  isAuthenticated: false
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginTypes.LOGIN: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      };
    }
    case LoginTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
