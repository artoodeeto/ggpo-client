import { User } from './user';

export interface Session {
  isAuthenticated: boolean;
  isUserLoggingInOrSigningUp: boolean;
  hasErrorOnSigningUpOrLoggingIn: boolean;
  errorMessageOnSigupOrLogin: string | Array<string> | Object;
  tokenExpirationTime: number | string;
}

export interface LoginSignupResponse {
  meta: {
    expToken: string;
    issueDate: Date;
  };
  payload: {
    token: string;
    user: User;
  };
}

export interface LoginFailed {
  error: string;
}

export interface LoginSignUpFormParams {
  username?: string;
  email: string;
  password: string;
}
