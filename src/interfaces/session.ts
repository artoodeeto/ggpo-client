import { IUser } from './user';

export interface ISession {
  isAuthenticated: boolean;
  isUserLoggingInOrSigningUp: boolean;
  hasErrorOnSigningUpOrLoggingIn: boolean;
  errorResponseOnSigupOrLogin: ILoginSignupFailed;
  tokenExpirationTime: number | string;
  dateTimeStartedLoginOrSignupInMiliSec: number;
  expectedTokenExpirationInMillisec: number;
}

export interface ILoginSignupResponse {
  meta: {
    expToken: string;
    issueDate: Date;
  };
  payload: {
    token: string;
    user: IUser;
  };
}

export interface ILoginSignupFailed {
  errorType: string;
  errorMessage: object;
}

export interface ILoginSignUpFormParams {
  username?: string;
  email: string;
  password: string;
}
