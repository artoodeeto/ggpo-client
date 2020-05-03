import { LoginTypes } from './Types';

export const logMeIn = () => ({
  type: LoginTypes.LOGIN,
  payload: {
    isAuthenticated: true
  }
});

export const logMeOut = () => ({
  type: LoginTypes.LOGOUT,
  payload: {
    isAuthenticated: false
  }
});
