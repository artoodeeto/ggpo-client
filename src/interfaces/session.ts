import { User } from './user';

export interface Session {
  isAuthenticated: boolean;
  isUserLoggingInOrSigningUp: boolean;
  hasErrorOnSigningUpOrLoggingIn: boolean;
  errorResponseOnSigupOrLogin: LoginSignupFailed;
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

export interface LoginSignupFailed {
  errorType: string;
  errorMessage: object;
}

export interface LoginSignUpFormParams {
  username?: string;
  email: string;
  password: string;
}
