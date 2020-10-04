import { ILoginSignupFailed } from 'interfaces/session';

export enum SessionEnumTypes {
  LOGOUT = 'LOGOUT',
  LOGIN_SIGNUP_SUCCESS = 'LOGIN_SIGNUP_SUCCESS',
  IS_LOGGING_IN_OR_SIGNING_UP = 'IS_LOGGING_IN_OR_SIGNING_UP',
  SIGNUP_LOGIN_FAILED = 'SIGNUP_LOGIN_FAILED'
}

export interface IOnSuccessLoginOrSignUp {
  type: typeof SessionEnumTypes.LOGIN_SIGNUP_SUCCESS;
  payload: {
    isAuthenticated: boolean;
    tokenExpirationTime: number;
    isUserLoggingInOrSigningUp: boolean;
    errorResponseOnSigupOrLogin: ILoginSignupFailed;
    hasErrorOnSigningUpOrLoggingIn: boolean;
    dateTimeStartedLoginOrSignupInMillisec: number;
    expectedTokenExpirationInMillisec: number;
  };
}

export interface IUserLoggingInOrSigningUp {
  type: typeof SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP;
  payload: {
    isUserLoggingInOrSigningUp: boolean;
  };
}

export interface ILogoutSession {
  type: typeof SessionEnumTypes.LOGOUT;
  payload: {
    isAuthenticated: boolean;
    isUserLoggingInOrSigningUp: boolean;
    hasErrorOnSigningUpOrLoggingIn: boolean;
    errorResponseOnSigupOrLogin: ILoginSignupFailed;
    tokenExpirationTime: number | string;
    dateTimeStartedLoginOrSignupInMillisec: number;
    expectedTokenExpirationInMillisec: number;
  };
}

export interface IUserLoginOrSignupFailed {
  type: typeof SessionEnumTypes.SIGNUP_LOGIN_FAILED;
  payload: {
    isUserLoggingInOrSigningUp: boolean;
    hasErrorOnSigningUpOrLoggingIn: boolean;
    errorResponseOnSigupOrLogin: ILoginSignupFailed;
  };
}

export type SessionActionTypes =
  | IOnSuccessLoginOrSignUp
  | IUserLoggingInOrSigningUp
  | ILogoutSession
  | IUserLoginOrSignupFailed;
