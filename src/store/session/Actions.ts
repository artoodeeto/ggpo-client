import {
  ILogoutSession,
  IOnSuccessLoginOrSignUp,
  IUserLoggingInOrSigningUp,
  IUserLoginOrSignupFailed,
  SessionEnumTypes
} from './Types';
import { ILoginSignUpFormParams, ILoginSignupFailed } from 'interfaces/session';
import { loginAPI, logoutAPI, oAuthUserData, signUpAPI } from 'api/sessions/sessions';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { setUpSessionOnLoginAndSignup } from 'helper/sessionSetup';
import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';
import { ISessionAPIResponse } from 'interfaces/api/sessions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { AppThunk } from 'interfaces/thunkType';
import { logoutUser, setupUserOnSuccessLoginORSignup } from 'store/user/Actions';
import Cookies from 'js-cookie';

export const onSuccessLoginOrSignUp = (
  tokenExpMilliSec: number,
  issueDateInMilliSec: number
): IOnSuccessLoginOrSignUp => ({
  type: SessionEnumTypes.LOGIN_SIGNUP_SUCCESS,
  payload: {
    isAuthenticated: true,
    tokenExpirationTime: tokenExpMilliSec,
    isUserLoggingInOrSigningUp: false,
    errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
    hasErrorOnSigningUpOrLoggingIn: false,
    dateTimeStartedLoginOrSignupInMillisec: issueDateInMilliSec,
    expectedTokenExpirationInMillisec: issueDateInMilliSec + tokenExpMilliSec
  }
});

export const userLoggingInOrSigningUp = (): IUserLoggingInOrSigningUp => ({
  type: SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP,
  payload: {
    isUserLoggingInOrSigningUp: true
  }
});

export const logoutSession = (): ILogoutSession => ({
  type: SessionEnumTypes.LOGOUT,
  payload: {
    ...sessionInitialState
  }
});

export const userLoginOrSignupFailed = (error: ILoginSignupFailed): IUserLoginOrSignupFailed => ({
  type: SessionEnumTypes.SIGNUP_LOGIN_FAILED,
  payload: {
    isUserLoggingInOrSigningUp: false,
    hasErrorOnSigningUpOrLoggingIn: true,
    errorResponseOnSigupOrLogin: { ...error }
  }
});

/**
 * @deprecated no longer used. We are using passportjs to handle login/signup
 */
export const logMeIn = (loginInfo: ILoginSignUpFormParams): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: ISessionAPIResponse = await loginAPI(loginInfo);
      setUpSessionOnLoginAndSignup(response, dispatch);
      autoLogoutAfterTokenExpire(dispatch, Number(response.meta.expToken));
    } catch (error) {
      dispatch(userLoginOrSignupFailed(error));
    }
  };
};

/**
 * @deprecated no longer used. We are using passportjs to handle login/signup
 */
export const signMeUp = (signupInfo: ILoginSignUpFormParams): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: ISessionAPIResponse = await signUpAPI(signupInfo);
      setUpSessionOnLoginAndSignup(response, dispatch);
      autoLogoutAfterTokenExpire(dispatch, Number(response.meta.expToken));
    } catch (error) {
      dispatch(userLoginOrSignupFailed(error));
    }
  };
};

export const getUserDataFromOAuth = (): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(userLoggingInOrSigningUp());
    try {
      const response: ISessionAPIResponse = await oAuthUserData();
      const { payload, meta } = response;
      const { expToken, issueDate } = meta;
      const { user } = payload;
      dispatch(onSuccessLoginOrSignUp(Number(expToken), Number(issueDate)));
      dispatch(setupUserOnSuccessLoginORSignup(user));
      autoLogoutAfterTokenExpire(dispatch, Number(response.meta.expToken));
      // setUpSessionOnLoginAndSignup(response, dispatch);
    } catch (error) {
      // FB doesnt response error but if login is not successful, it will redirect to login page
      dispatch(logoutSession());
      dispatch(logoutUser());
      // we need to manually remove the cookie because if logoutAPI fails just to be safe
      Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
    }
  };
};

export const logMeOut = (): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    try {
      await logoutAPI();
      dispatch(logoutSession());
      dispatch(logoutUser());
      // Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
    } catch (error) {
      dispatch(logoutSession());
      dispatch(logoutUser());
      // we need to manually remove the cookie because if logoutAPI fails just to be safe
      Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
    }
  };
};
