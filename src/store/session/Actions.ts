import {
  ILogoutSession,
  IOnSuccessLoginOrSignUp,
  IUserLoggingInOrSigningUp,
  IUserLoginOrSignupFailed,
  SessionEnumTypes
} from './Types';
import { ILoginSignUpFormParams, ILoginSignupFailed } from 'interfaces/session';
import { loginAPI, signUpAPI } from 'api/sessions/sessions';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { setUpSessionOnLoginAndSignup } from 'helper/sessionSetup';
import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';
import { ISessionAPIResponse } from 'interfaces/api/sessions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { AppThunk } from 'interfaces/thunkType';

export const onSuccessLoginOrSignUp = (
  tokenExpMilliSec: number,
  issueDateInMilliSec: number
): IOnSuccessLoginOrSignUp => ({
  type: SessionEnumTypes.LOGIN_SIGNUP_SUCCESS,
  payload: {
    isAuthenticated: true,
    tokenExpirationTime: tokenExpMilliSec,
    isUserLoggingInOrSigningUp: false,
    errorResponseOnSigupOrLogin: { errorType: '', errorMessage: {} },
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
