import { LoginTypes } from './Types';

const initialState = {
  isAuthenticated: false
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LoginTypes.LOGIN: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    default: {
      return state;
    }
  }
};

export default loginUser;
