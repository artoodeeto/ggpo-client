import { SessionTypes } from './Types';
import { LoginSignUp } from 'interfaces/signupLogin';
import { User } from 'interfaces/user';
import { LoginSuccess } from 'interfaces/login';
import { loginAPI, signUpAPI } from 'api/sessions';
import Cookies from 'js-cookie';

export const onSuccessLoginORSignup = (user: User) => ({
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
      const response: LoginSuccess = await loginAPI(loginInfo);
      const { payload, meta } = response;
      const { expToken } = meta;
      const { user, token } = payload;
      console.log(process.env.REACT_APP_COOKIE_NAME, token, 'waas', new Date(expToken));
      dispatch(onSuccessLoginORSignup(user));
      Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, { expires: new Date(expToken), secure: true });
      console.log(Cookies.get(process.env.REACT_APP_COOKIE_NAME as string));
      console.log(response, process.env.REACT_APP_COOKIE_NAME);
    } catch (error) {
      console.log({ login: error });
    }
  };
};

export const signMeUp = (signupInfo: LoginSignUp) => {
  return async (dispatch: Function) => {
    try {
      const response: LoginSuccess = await signUpAPI(signupInfo);
      const { payload, meta } = response;
      const { expToken } = meta;
      const { user, token } = payload;
      console.log(token, 'atukin', expToken);
      dispatch(onSuccessLoginORSignup(user));
      console.log(response);
    } catch (error) {
      console.log({ signup: error });
    }
  };
};
