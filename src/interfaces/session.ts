export interface ISession {
  isAuthenticated: boolean;
  isUserLoggingInOrSigningUp: boolean;
  hasErrorOnSigningUpOrLoggingIn: boolean;
  errorResponseOnSigupOrLogin: ILoginSignupFailed;
  tokenExpirationTime: number | string;
  dateTimeStartedLoginOrSignupInMillisec: number;
  expectedTokenExpirationInMillisec: number;
}

export interface ILoginSignupFailed {
  errorType: string;
  errorMessage: any;
}

export interface ILoginSignUpFormParams {
  username?: string;
  email: string;
  password: string;
}
