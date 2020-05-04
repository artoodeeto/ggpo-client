import { SessionTypes } from './Types';
import { LoginSignUp } from 'interfaces/signupLogin';
import loginService from 'api/session/login';
import { User } from 'interfaces/user';
import { LoginSuccess } from 'interfaces/login';
import signUpService from 'api/session/signup';

export const onSuccessLogin = (user: User) => ({
  type: SessionTypes.LOGIN_SIGNUP_SUCCESS,
  payload: {
    ...user,
    isAuthenticated: true
  }
});

export const logMeOut = () => ({
  type: SessionTypes.LOGOUT,
  payload: {
    id: null,
    username: '',
    email: '',
    isAuthenticated: false
  }
});

/**
 * @description
 * All async/redux-thunk actions should be under this comments
 *
 */

export const logMeIn = (loginInfo: LoginSignUp) => {
  return async (dispatch: Function) => {
    try {
      const response: LoginSuccess = await loginService(loginInfo);
      const { payload } = response;
      // const {expToken} = meta;
      const { user } = payload;
      dispatch(onSuccessLogin(user));
      console.log(response);
    } catch (error) {
      console.log({ login: error });
    }
  };
};

export const signMeUp = (signupInfo: LoginSignUp) => {
  return async (dispatch: Function) => {
    try {
      const response: LoginSuccess = await signUpService(signupInfo);
      const { payload } = response;
      // const {expToken} = meta;
      const { user } = payload;
      dispatch(onSuccessLogin(user));
      console.log(response);
    } catch (error) {
      console.log({ signup: error });
    }
  };
};
