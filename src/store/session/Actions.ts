import { SessionActionTypes } from './Types';
import { ILoginSignupResponse, ILoginSignUpFormParams, ILoginSignupFailed } from 'interfaces/session';
import { loginAPI, signUpAPI } from 'api/sessions/sessions';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { setUpSessionOnLoginAndSignup } from 'helper/sessionSetup';

export const onSuccessLoginOrSignUp = (tokenExp: string | number) => ({
  type: SessionActionTypes.LOGIN_SIGNUP_SUCCESS,
  payload: {
    isAuthenticated: true,
    tokenExpirationTime: tokenExp,
    isUserLoggingInOrSigningUp: false,
    errorResponseOnSigupOrLogin: {},
    hasErrorOnSigningUpOrLoggingIn: false
  }
});

export const userLoggingInOrSigningUp = () => ({
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

export const userLoginOrSignupFailed = (error: ILoginSignupFailed) => ({
  type: SessionActionTypes.SIGNUP_LOGIN_FAILED,
  payload: {
    isUserLoggingInOrSigningUp: false,
    hasErrorOnSigningUpOrLoggingIn: true,
    errorResponseOnSigupOrLogin: { ...error }
  }
});

/**
 * @description
 * All async/redux-thunk/side-effects should be under this comments
 *
 */

export const logMeIn = (loginInfo: ILoginSignUpFormParams) => {
  return async (dispatch: Function) => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: ILoginSignupResponse = await loginAPI(loginInfo);
      setUpSessionOnLoginAndSignup(response, dispatch);
    } catch (error) {
      dispatch(userLoginOrSignupFailed(error));
    }
  };
};

export const signMeUp = (signupInfo: ILoginSignUpFormParams) => {
  return async (dispatch: Function) => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: ILoginSignupResponse = await signUpAPI(signupInfo);
      setUpSessionOnLoginAndSignup(response, dispatch);
    } catch (error) {
      dispatch(userLoginOrSignupFailed(error));
    }
  };
};
