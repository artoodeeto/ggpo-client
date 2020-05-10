import { SessionActionTypes } from './Types';
// import { Session } from 'interfaces/session';
import { LoginSuccess, LoginSignUpFormParams } from 'interfaces/session';
import { loginAPI, signUpAPI } from 'api/sessions';
import Cookies from 'js-cookie';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { setupUserOnSuccessLoginORSignup } from 'store/user/Action';

export const onSuccessLoginOrSignUp = (tokenExp: string | number) => ({
  type: SessionActionTypes.LOGIN_SIGNUP_SUCCESS,
  payload: {
    isAuthenticated: true,
    tokenExpirationTime: tokenExp,
    isUserLoggingInOrSigningUp: false
  }
});

const userLoggingInOrSigningUp = () => ({
  type: SessionActionTypes.IS_LOGGING_IN_OR_SIGNING_UP,
  payload: {
    isUserLoggingInOrSigningUp: true
  }
});

export const logoutSession = () => ({
  type: SessionActionTypes.LOGOUT,
  payload: {
    ...sessionInitialState
  }
});

/**
 * @description
 * All async/redux-thunk/side-effects should be under this comments
 *
 */

export const logMeIn = (loginInfo: LoginSignUpFormParams) => {
  return async (dispatch: Function) => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: LoginSuccess = await loginAPI(loginInfo);
      const { payload, meta } = response;
      const { expToken } = meta;
      const { user, token } = payload;
      console.log(process.env.REACT_APP_COOKIE_NAME, token, 'waas', new Date(expToken));
      dispatch(onSuccessLoginOrSignUp(expToken));
      dispatch(setupUserOnSuccessLoginORSignup(user));
      Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, { expires: new Date(expToken), secure: true });
      console.log(Cookies.get(process.env.REACT_APP_COOKIE_NAME as string));
      console.log(response, process.env.REACT_APP_COOKIE_NAME);
    } catch (error) {
      console.log({ login: error });
    }
  };
};

export const signMeUp = (signupInfo: LoginSignUpFormParams) => {
  return async (dispatch: Function) => {
    try {
      const response: LoginSuccess = await signUpAPI(signupInfo);
      const { payload, meta } = response;
      const { expToken } = meta;
      const { user, token } = payload;
      console.log(token, 'atukin', expToken);
      dispatch(onSuccessLoginOrSignUp(expToken));
      console.log(response);
    } catch (error) {
      console.log({ signup: error });
    }
  };
};
